# Call booking calendar project

## TypeSpec module structure

- `spec/main.tsp` — TypeSpec source
- `spec/tspconfig.yaml` — TypeSpec compiler config (emits OpenAPI 3.0)
- `spec/tsp-output/@typespec/openapi3/openapi.yaml` — generated output (committed)
- `spec/package.json` — npm dependencies

## Commands

```bash
cd spec && npm install
npm run tsp -- compile   # or: npx tsp compile
```

## CI check

The Hexlet CI workflow (`hexlet-check.yml`) runs `npm install && tsp compile`. The `tsp-output/` directory is gitignored — output is generated locally during CI validation.

## Package manager

Use `npm` (pinned to 11.12.1 in `packageManager` field). Do not switch to pnpm or yarn.
