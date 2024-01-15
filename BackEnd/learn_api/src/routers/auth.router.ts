/** @format */

import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import { registValidator } from "../middleware/validator";

export class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      "/regist",
      registValidator,
      this.authController.registerUser
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
