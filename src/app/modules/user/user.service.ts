import config from "../../config";
import { TUser } from "./user.interface";
import { userModel } from "./user.model";
import jwt from "jsonwebtoken";

const createAccountToDB = async (user: TUser) => {
  const result = await userModel.create(user);
  return result;
};

const LoginAccount = async (email: string, password: string) => {
  const user = await userModel.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== password) {
    throw new Error("Invalid password");
  }

  // Generate JWT Token
  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    config.jwt_secret as string,
    { expiresIn: "1h" }
  );

  return { user, token };
};

export const userDb = {
  createAccountToDB,
  LoginAccount,
};
