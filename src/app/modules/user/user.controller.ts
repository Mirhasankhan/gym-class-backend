import { Request, Response } from "express";
import { userDb } from "./user.service";

const addNewUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await userDb.createAccountToDB(user);

    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: `something went wrong`,
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await userDb.LoginAccount(email, password);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        user,
        token,
      },
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const userController = {
  addNewUser,
  loginUser,
};
