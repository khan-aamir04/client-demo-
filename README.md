# client-demo

A client-account workspace demo built with Vite + React + React Router.

## Pages

| Route | Description |
| --- | --- |
| `/` | Dashboard with portfolio KPIs, accounts needing attention, recent activity |
| `/clients` | Searchable + status-filterable client table |
| `/clients/:clientId` | Account detail with plan, projects and invoices |
| `/invoices` | Invoice list with status filters and billing totals |
| `/settings` | Workspace preferences form |

All data is mock data in `src/data/clients.js` — there is no backend.

## Run with Docker (used by Alloy sessions)

```bash
docker compose -f docker-compose.alloy.yaml up
```

The dev server listens on http://localhost:5173. Inside an Alloy session the
preview is proxied at http://localhost:8080.

## Run locally

```bash
npm install
npm run dev
```

## Project layout

```
src/
  App.jsx              route definitions
  main.jsx             entry point + BrowserRouter
  global.css           design tokens and shared classes
  components/          Layout shell and small UI primitives
  pages/               one file per route
  data/clients.js      mock client/invoice data and helpers
```

## Alloy configuration

- `docker-compose.alloy.yaml` — single `web` service on `network_mode: host`
- `.alloy/environment.json` — declares the compose path and `frontendPort: 5173`
