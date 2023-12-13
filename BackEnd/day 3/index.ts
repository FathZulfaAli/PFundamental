/** @format */

import express, { Handler, Request, Response } from "express";
import expensesRouter from "./router/expense";

const PORT = 8000;
const app = express();

app.use(express.json());

// inject outer
app.use("/expenses", expensesRouter);

// error handling global middleware
app.use((err: Error, _res: Request, res: Response, _next: Handler) => {
  console.log("FATAL ERROR", err.stack);
  res.status(500).json({
    message: err.message,
  });
});

// 404 global middleware
app.use((req, res) => {
  console.log(`404: ${req.method} ${req.path}`);
  res.status(400).json({
    message: "not found",
  });
});

app.listen(PORT, () => {
  console.log(`yess kena di port ${PORT}`);
});
