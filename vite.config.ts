import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The friction wrapper (public/loader.js + public/pkg/, staged by
// scripts/fetch-wasm.sh) looks for locally-staged model packs by issuing a
// document-relative HEAD probe against ./packs/dms-index-en-v1.toml before
// falling back to raw.githubusercontent.com. This site never stages a
// packs/ directory, so that probe must resolve to a real 404. Without this
// middleware, Vite's dev server falls back to index.html for any unknown
// path (the SPA history-fallback), the probe gets a 200 with an HTML body,
// and the engine tries to parse that HTML as model weights and fails. The
// middleware below must run before the SPA fallback intercepts the request.
function rejectLocalPacksProbe() {
  return {
    name: "reject-local-packs-probe",
    configureServer(server: import("vite").ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith("/packs/")) {
          res.statusCode = 404;
          res.end("Not found");
          return;
        }
        next();
      });
    },
  };
}

const WRAPPER_CONTENT_TYPES: Record<string, string> = {
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".wasm": "application/wasm",
  ".json": "application/json",
  ".ts": "text/plain",
};

// The demo consumes the wrapper with a runtime dynamic import of the
// absolute path "/loader.js" (loader.js in turn imports "./pkg/friction_wasm.js"
// module-relatively, which only resolves correctly if both are served from
// the site root — see public/loader.js and public/pkg/ staged by
// scripts/fetch-wasm.sh). Vite's dev server, however, unconditionally
// refuses to serve any file under publicDir through its module/import
// pipeline ("Cannot import non-asset file ... which is inside /public"),
// regardless of /* @vite-ignore */ or how the specifier is obtained — this
// guard exists precisely because public files skip Vite's plugin
// transforms. So for these two paths only, this middleware answers the
// request directly from disk before Vite's own middlewares (and that
// guard) ever see it — a plain static file serve, exactly what a
// production static host does with the same build output. It must be
// registered ahead of Vite's internal middlewares, which configureServer
// does by default for middlewares added without returning a post-hook.
function serveFrictionWrapperStatically(publicDir: string) {
  return {
    name: "serve-friction-wrapper-statically",
    configureServer(server: import("vite").ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ?? "";
        const pathname = url.split("?")[0];
        if (pathname !== "/loader.js" && !pathname.startsWith("/pkg/")) {
          next();
          return;
        }
        const filePath = path.join(publicDir, pathname);
        if (!existsSync(filePath)) {
          next();
          return;
        }
        res.setHeader("Content-Type", WRAPPER_CONTENT_TYPES[path.extname(filePath)] ?? "application/octet-stream");
        res.end(readFileSync(filePath));
      });
    },
  };
}

export default defineConfig({
  plugins: [rejectLocalPacksProbe(), serveFrictionWrapperStatically(path.resolve(import.meta.dirname, "public")), react()],
});
