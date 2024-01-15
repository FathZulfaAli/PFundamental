/** @format */

import { Request, Response } from "express";
import { createBranch, findAllBranch, findOneBranch } from "../service/branch";

export async function handleCreateBranch(req: Request, res: Response) {
  const { name, locaation } = req.body;
  try {
    const result = await createBranch({ name, locaation });
    res.status(201).json({
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "failed to insert mew branch",
      error,
    });
  }
}

export async function handleGetAllBranch(req: Request, res: Response) {
  try {
    const result = await findAllBranch();
    res.status(200).json({
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "failed to get branches",
      error,
    });
  }
}

export async function handleGetOneBranch(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({
      message: "Invalid id number",
    });
  }
  try {
    const result = await findOneBranch(id);
    if (result === null) {
      return res.status(400).json({
        message: "branch not found",
      });
    }
    res.status(200).json({
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(501).json({
      message: "failed to get data from database",
    });
  }
}
