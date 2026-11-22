# Single Terminal Execution Guide

This project is configured to run both the backend (Express) and the frontend (React + Vite) from a single terminal using two modes.

---

## 1. Development Mode (Recommended for Coding)

Runs both environments concurrently with live reloading:

```bash
npm run dev
```

### What this command does:
- Uses the `concurrently` package configured in `package.json`.
- Starts the Express backend on `http://localhost:3000`.
- Starts the Vite development server on `http://localhost:5173`.
- Automatically terminates both processes if either fails (`--kill-others-on-fail`).

---

## 2. Production Mode / Unified Server

Builds the frontend and serves it directly through Express on a single port:

```bash
npm run build
npm start
```

### What this command does:
1. `npm run build`: Installs frontend dependencies and generates the production bundle in `frontend/dist`.
2. `npm start`: Runs `backend/server.js`, which serves the static React files and handles `/api` endpoints under a single server at `http://localhost:3000`.

This matches the setup used for deployment on platforms like Render.

---

## Summary of Scripts in `package.json`

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs backend and frontend in parallel for development. |
| `npm run build` | Builds the React frontend application into `frontend/dist`. |
| `npm start` | Starts the unified production server on port 3000. |
| `npm run server` | Starts only the Express backend. |
| `npm run client` | Starts only the Vite frontend. |
