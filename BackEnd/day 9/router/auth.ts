/** @format */

import { Router } from "express";
import { changePassword, keepLogin, login, register } from "../controller/auth";
import { verifyToken } from "../middleware/jwt";

const authRouter = Router();

authRouter.post("/regist", register);
authRouter.post("/login", login);

// ROUTE KEEP LOGIN
authRouter.get("/keepLogin", verifyToken, keepLogin);
authRouter.patch("/changePassword", verifyToken, changePassword);

export default authRouter;
