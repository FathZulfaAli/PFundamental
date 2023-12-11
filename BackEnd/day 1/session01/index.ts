/** @format */

import express from "express";

const PORT = 8000;

const app = express();

app.get("/api", (req, res) => {
  res.send("Haloo ini pake express API");
});

app.use("*", (req, res) => {
  res.status(404).json({ message: "hayoo loh ilang" });
});

app.listen(PORT, () => {
  console.log(`success: API server start on localhost:${PORT}`);
});
