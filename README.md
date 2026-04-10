# Padre Gino's

A small static page that lists pizza-style items, built with **React 18** and **Vite**. JSX lives in `src/`; styling is in `style.css`.

## Requirements

- **Node.js** — use the version in `[.nvmrc](./.nvmrc)` (e.g. `nvm use`).

## Setup

```bash
npm install
```

## Development

Start the Vite dev server (hot reload, default port from Vite—often `http://localhost:5173`):

```bash
npm run dev
```

## Build

Produce a production bundle in `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Scripts


| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Vite dev server                        |
| `npm run build`   | Production build to `dist/`            |
| `npm run preview` | Serve the `dist/` output locally       |
| `npm run lint`    | Run ESLint on the project              |
| `npm run format`  | Format `src` JS/CSS/HTML with Prettier |


## Project layout

- `index.html` — page shell; Vite loads `src/App.jsx`
- `src/App.jsx` — React app (JSX)
- `style.css` — site styles

## Weird dev notes

Scratch-pad stuff (Vite proxy, API, whatever else): **[notes.md](./notes.md)**.