/** @format */

import { Router } from "express";
import { SampleController } from "../controllers/sample.controller";

export class SampleRouter {
  private router: Router;
  private sampleController: SampleController;

  constructor() {
    this.router = Router();
    this.sampleController = new SampleController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get("/", this.sampleController.getSample);
    this.router.post("/", this.sampleController.createSample);
  }

  // BY DEFAULT METHOD DALAM CLASS ITU PUBLIC
  getRouter(): Router {
    return this.router;
  }
}
