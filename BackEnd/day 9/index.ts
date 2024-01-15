/** @format */

import { PrismaClient } from "@prisma/client";
import express from "express";
import articleRouter from "./router/article";
import authRouter from "./router/auth";
const PORT = 8000;

export const prisma = new PrismaClient({
  log: ["query"],
});

const app = express();
app.use(express.json());

// APP ROUTING
app.use("/articles", articleRouter);
app.use("/auth", authRouter);

// CHECK DB CONNECTION & START API
prisma
  .$connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Blog API start on PORT :${PORT}`);
    });
  })
  .catch((error) => {
    console.error("FAILED TO CONNECT DATABASE:", error);
  });
