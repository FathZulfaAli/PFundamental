/** @format */

import express, { Request, Response } from "express";

const PORT = 8000;

const app = express();
app.get("/", (req: Request, res: Response) => {
  res.send("welcomeee");
});

app.get("/ab?cd", (req: Request, res: Response) => {
  res.send("request ke ab?cd");
});

app.listen(PORT, () => {
  console.log("yess kena");
});
