/** @format */

import { Request, Response } from "express";
import { prisma } from "../index";
import { compare, genSalt, hash } from "bcrypt";
import { sign, verify } from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    // CHECK EXISTING USER / EMAIL MUSH UNIQUE
    const existingUser = await prisma.user.findUnique({
      where: { email: req.body.email },
    });

    if (existingUser) {
      throw new Error("Email is already exist");
    }

    // ADD USER IF NOT EXIST
    const salt = await genSalt(10);
    const hashPassword = await hash(req.body.password, salt);
    const newUser = await prisma.user.create({
      data: {
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
      },
    });

    return res.status(201).send({ success: true });
  } catch (error: any) {
    console.log(error);
    return res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.body.email },
    });

    if (!user) {
      throw new Error("INVALID Email or Password");
    }

    // FUNC TO COMPARE INPUT WITH BYCRYPT
    const isValidPassword = await compare(req.body.password, user.password);
    if (!isValidPassword) {
      throw new Error("INVALID Email or Password");
    }

    // GENERATE TOKEN
    const jwtToken = sign(
      { id: user.id, role: user.role, email: user.email },
      "budi123"
    );

    return res.status(200).send({
      username: user.username,
      email: user.email,
      token: jwtToken,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

export const keepLogin = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.dataUser.email },
    });

    if (!user) {
      throw new Error("INVALID Email or Password");
    }
    // GENERATE TOKEN
    const jwtToken = sign(
      { id: user.id, role: user.role, email: user.email },
      "budi123"
    );

    return res.status(200).send({
      username: user.username,
      email: user.email,
      token: jwtToken,
    });
  } catch (error: any) {
    return res.status(500).send(error);
  }
};

export const changePassword = async (req: Request, res: Response) => {
  try {
    // CHECK OLD PASSWORD
    const checkUser = await prisma.user.findUnique({
      where: { email: req.dataUser.email },
    });

    if (!checkUser) {
      return res.status(400).send("User doesn't exist");
    }

    const isValidPassword = await compare(
      req.body.oldPassword,
      checkUser?.password
    );

    if (!isValidPassword) {
      return res.status(401).send("INVALID OLD PASSWORD");
    }

    // IF VALID CONTINUE TO PATCH PASSWORD
    const salt = await genSalt(10);
    const hashPassword = await hash(req.body.newPassword, salt);
    const upadatePassword = await prisma.user.update({
      where: { id: req.dataUser.id },
      data: {
        password: hashPassword,
      },
    });

    return res.status(200).send({
      success: true,
      result: upadatePassword,
    });
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};
