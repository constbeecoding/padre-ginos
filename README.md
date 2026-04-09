# Padre Gino's

A small static page that lists pizza-style items, built with **React 18** loaded from a CDN (no bundler). Styling lives in `style.css`.

## Requirements

- **Node.js** — use the version in [`.nvmrc`](./.nvmrc) (e.g. `nvm use`).

## Setup

```bash
npm install
```

## Run locally

This project is plain HTML + scripts. Serve the repo root so paths like `./src/App.js` resolve correctly:

```bash
npx --yes serve .
```

Then open the URL it prints (often `http://localhost:3000`) and open `index.html`.

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `npm run lint` | Run ESLint on the project            |
| `npm run format` | Format `src` JS/CSS/HTML with Prettier |

## Project layout

- `index.html` — page shell, React/ReactDOM from unpkg, loads `src/App.js`
- `src/App.js` — React app (`React.createElement` / no JSX build step)
- `style.css` — site styles

---

*README is minimal for now; expand as the stack or deployment story grows.*
