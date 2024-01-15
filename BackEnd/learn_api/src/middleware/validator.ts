/** @format */

import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const registValidator = [
  body("username").notEmpty().withMessage("User Name is Required"),
  body("email").notEmpty().withMessage("Email is Required"),
  body("email").isEmail().withMessage("Wrong email format"),
  //middleware validator if there is error
  (req: Request, res: Response, next: NextFunction) => {
    const errorValidator = validationResult(req);
    // if errorValidator isnt empty should be sent response with error
    if (!errorValidator.isEmpty()) {
      return res.status(400).send({ error: errorValidator.array() });
    }
    next(); // if errorValidator empty should be continue to next controller
  },
];
