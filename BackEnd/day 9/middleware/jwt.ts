/** @format */

import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

type User = {
  id: number;
  email: string;
  role: string;
};

declare global {
  namespace Express {
    interface Request {
      dataUser: User;
    }
  }
}

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // READ TOKEN FROM req.header
    const token = req.header("Authorization")?.split(" ")[1];

    // IF TOKEN UNDEFINED
    if (!token) {
      // SEND res.status and msg
      return res.status(400).send("Please login first");
    }

    // IF TOKEN EXIST, CONTINUE TO VERIFY/TRANSLATE W/ SECRET KEY
    const verifiedToken = verify(token, "budi123");
    if (!verifiedToken) {
      return res.status(401).send("Unatuhorized Token");
    }

    req.dataUser = verifiedToken as User;
    next(); // TO CONTINUE TO NEXT MIDDLEWARE
  } catch (error: any) {
    console.log(error);
    return res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};
