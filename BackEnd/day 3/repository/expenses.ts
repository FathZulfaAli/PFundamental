/** @format */
import { readFileSync, writeFileSync } from "fs";

export type InputExpense = {
  name: string;
  nominal: number;
  category: string;
};

export type Expense = {
  id: number;
  createAt: Date;
} & InputExpense;

export class ExpenseRepository {
  _jsonPath: string;

  constructor(jsonPath: string) {
    this._jsonPath = jsonPath;
  }

  add(data: InputExpense): Expense {
    const expenses = this._readJson();
    const newID = expenses.map((d) => d.id).sort((a, b) => b - a)[0] + 1 || 1;
    const result = {
      id: newID,
      createAt: new Date(),
      ...data,
    };
    expenses.push(result);
    this._writeJson(expenses);
    return result;
  }

  getAll(): Expense[] {
    return this._readJson();
  }

  //   app.get("/ab?cd", (req: Request, res: Response) => {
  //     res.send("request ke ab?cd");
  //   });

  _writeJson(rawData: Expense[]) {
    writeFileSync(this._jsonPath, JSON.stringify(rawData, null, 2));
  }

  _readJson(): Expense[] {
    const rawData = readFileSync(this._jsonPath);
    return JSON.parse(rawData.toString());
  }
}
