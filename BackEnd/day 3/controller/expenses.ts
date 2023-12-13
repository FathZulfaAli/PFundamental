/** @format */

import { Request, Response } from "express";
import { createExpenseData, getListExpense } from "../service/expenses";

export function handleListExpense(_req: Request, res: Response) {
  const result = getListExpense();
  res.json({ result });
}

export function handleCreateExpense(req: Request, res: Response) {
  console.log(req.body);
  createExpenseData({
    name: req.body.name,
    nominal: req.body.nominal,
    category: req.body.category,
  });
}
