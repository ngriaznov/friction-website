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

## Deployment (Cloudflare Workers, from CI)

Every push to `main` runs `.github/workflows/deploy.yml`: install, stage
the wasm wrapper from the friction release, build, then
`wrangler deploy` — an assets-only Worker serving `dist/` (config in
`wrangler.jsonc`). Without the Cloudflare secrets the workflow still
builds and reports green; it just skips the deploy step.

One-time setup:

1. In the Cloudflare dashboard, create an API token with the
   **Edit Cloudflare Workers** template.
2. Add two repository secrets on GitHub: `CLOUDFLARE_API_TOKEN` and
   `CLOUDFLARE_ACCOUNT_ID` (the account ID is on the dashboard's
   Workers overview page).
3. The first deploy lands on the `workers.dev` subdomain only. When it
   looks right, uncomment the `routes` line in `wrangler.jsonc` to
   attach `friction-cli.dev` — DNS is managed automatically as long as
   the zone is in the same account.

Manual deploy from a machine with `wrangler login`: `npm run fetch-wasm
&& npm run build && npx wrangler deploy`.
