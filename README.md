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

## Cloudflare Pages

- Build command: `npm run fetch-wasm && npm run build`
- Build output directory: `dist`
