/** @format */

import express, {
  Express,
  NextFunction,
  Request,
  Response,
  json,
  urlencoded,
} from "express";
import cors from "cors";
import { SampleRouter } from "./routers/sample.router";
import { AuthRouter } from "./routers/auth.router";

const PORT = 7070;

class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure(); // EXECUTE CONFIG METHOD
    this.routes();
    this.errorHandle();
  }

  private configure(): void {
    this.app.use(cors()); // TO ALLOW SERVER DB AND FRONT END COMMUNICATE
    this.app.use(json()); // TO READ req.body
    this.app.use(urlencoded({ extended: true })); // TO ACC req.body FORM TYPE
  }

  private errorHandle(): void {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.log("ERROR :", err.stack);
        res.status(500).send(err.message);
      }
    );
  }
  private routes(): void {
    const sampleRouter = new SampleRouter();
    const authRouter = new AuthRouter();

    this.app.use("/samples", sampleRouter.getRouter());
    this.app.use("/auth", authRouter.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`API RUNNING AT http://localhost:${PORT}`);
    });
  }
}

export default App;
