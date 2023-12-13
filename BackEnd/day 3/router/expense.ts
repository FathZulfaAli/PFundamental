/** @format */

import { Router } from "express";
import { handleCreateExpense, handleListExpense } from "../controller/expenses";

const router = Router();

router.get("/", handleListExpense);

router.post("/", handleCreateExpense);

export default router;
