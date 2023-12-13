/** @format */

import {
  Expense,
  ExpenseRepository,
  InputExpense,
} from "../repository/expenses";

const expenseRepository = new ExpenseRepository(`${__dirname}/../db.json`);

export function createExpenseData(data: InputExpense): Expense {
  const result = expenseRepository.add(data);
  return result;
}

export function getListExpense(): Expense[] {
  const result = expenseRepository.getAll();
  return result;
}
