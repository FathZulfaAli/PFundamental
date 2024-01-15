/** @format */

import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";

export default class AuthController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, email, password } = req.body;

      const newUser = await prisma.user.create({
        data: {
          username: username, //IF VALUE NAME = COULMN NAME, YOU CAN JUST USE ONE username
          email: email,
          password: password,
        },
      });

      res.status(201).send(newUser);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  }
}
