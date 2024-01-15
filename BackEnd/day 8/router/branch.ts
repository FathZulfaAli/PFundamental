/** @format */
import { Router } from "express";
import {
  handleCreateBranch,
  handleGetAllBranch,
  handleGetOneBranch,
} from "../controller/branch";

const branchRouter = Router();

branchRouter.post("/", handleCreateBranch);
branchRouter.get("/", handleGetAllBranch);
branchRouter.get("/:id", handleGetOneBranch);

export default branchRouter;
