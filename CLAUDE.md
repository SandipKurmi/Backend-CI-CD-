# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev           # Start dev server with nodemon (auto-reload)
npm start             # Run compiled output from dist/

# Testing
npm run test          # Run Jest in watch mode (interactive, local dev)
npm run test:ci       # Run Jest once without watch (used in CI)

# Code quality
npm run lint:check    # Check for ESLint issues
npm run lint:fix      # Auto-fix ESLint issues
npm run format:check  # Check Prettier formatting
npm run format:fix    # Apply Prettier formatting

# Build (TypeScript → dist/)
npm run build
```

Node.js version: v22.0.0 (see `.nvmrc`; use `nvm use` to switch).

## Architecture

This is a TypeScript Express service (auth-service) following a minimal structure:

- **`src/server.ts`** — Entry point. Reads `Config.port`, starts `app.listen()`, handles startup errors.
- **`src/app.ts`** — Express app. Defines routes and a global error handler that normalizes `HttpError` objects to JSON responses.
- **`src/config/index.ts`** — Loads `.env` via dotenv, exports `Config` object (`env`, `port`).
- **`src/config/logger.ts`** — Winston logger. Writes to `logs/combined.log` and `logs/error.log`. Silenced automatically when `NODE_ENV === 'test'`.

Tests live in `tests/` and use Jest + Supertest. Test files follow the `*.spec.ts` naming convention. The `tsconfig.json` excludes `tests/` so `tsc` only compiles `src/`; ts-jest handles test compilation separately.

## Code Style

- ESLint v9 flat config (`eslint.config.mjs`) with TypeScript strict + stylistic rules and Prettier integration.
- `no-console` is enforced — use the Winston logger from `src/config/logger.ts` instead.
- Prettier: 4-space tabs, single quotes, semicolons required, 80-char line width.
- Pre-commit hook (Husky + lint-staged) runs `format:fix` then `lint:fix` on staged `*.ts` files automatically.

## Environment

Copy `.env.example` to `.env` and set:

- `PORT` — HTTP port
- `NODE_ENV` — e.g., `development`, `test`, `production`
