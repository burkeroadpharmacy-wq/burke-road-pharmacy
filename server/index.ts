/**
 * Minimal static file server for Manus platform deployment.
 * The frontend is a fully static React/Vite SPA — this server just serves
 * the built assets from dist/public/ and handles SPA routing fallback.
 */
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from dist/public/
// dist/index.js lives in dist/, so public/ is a sibling at dist/public/
const staticDir = path.resolve(__dirname, "public");
app.use(express.static(staticDir));

// SPA fallback — all unmatched routes return index.html (Express 5 syntax)
app.get("/{*path}", (_req, res) => {
  res.sendFile(path.join(staticDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Burke Road Pharmacy serving on port ${PORT}`);
});
