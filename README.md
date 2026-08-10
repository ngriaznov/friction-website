# friction-website

The marketing site for [friction](https://github.com/ngriaznov/friction), a deterministic CLI that strips LLM-speak out of machine-written technical documentation. Built with Vite, React and TypeScript. The interactive demo runs the real friction engine in the browser via WebAssembly.

## Development

```
npm install
npm run fetch-wasm
npm run dev
```

`fetch-wasm` downloads the `friction-playground` release tarball from GitHub and stages the WASM wrapper (`loader.js` and `pkg/`) into `public/`. Run it once before `npm run dev`, and again after bumping the pinned friction version.

## Build

```
npm run fetch-wasm
npm run build
```

Output goes to `dist/`.

## Deployment (Cloudflare Workers Builds)

The repo is connected to Cloudflare's Git integration, which builds and
deploys on every push to `main`. `wrangler.jsonc` defines an assets-only
Worker named `friction-cli` — the existing Worker `friction-cli.dev` is
attached to — serving `dist/`. Settings on the Cloudflare side:

- Build command: `npm run fetch-wasm && npm run build`
- Deploy command: `npx wrangler deploy`

`fetch-wasm` must run before the build: it stages the wasm wrapper from
the friction GitHub release into `public/`, and without it the site
ships with no engine.

Manual deploy from a machine with `wrangler login`: `npm run fetch-wasm
&& npm run build && npx wrangler deploy`.
