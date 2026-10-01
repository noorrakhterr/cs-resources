# CS Resources Hub

Internal resources dashboard for the Scale CS Okta team. Deployed on the
[Okta App Platform](https://docs.platform.atko.ai/) as a static SPA (Vite
build, auto-detected — no extra config needed).

## Local development

```bash
npm install
npm run dev
```

## Adding or editing content

All content lives in plain data files — no need to touch components.

- **Products & resource links**: [src/data/products.ts](src/data/products.ts)
  Each product has a `customerFacing` list and an `internal` list of
  `{ title, description?, url }`. Set `url` to a real link to activate the
  card — placeholders (`url: "#"`) render as "Link coming soon."
- **Resource sources** (footer strip): [src/data/sources.ts](src/data/sources.ts)

## Build

```bash
npm run build
```
