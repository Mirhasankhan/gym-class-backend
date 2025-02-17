import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
  name: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
      },
      message: "Invalid email format",
    },
  },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "trainer", "trainee"], required: true },
});

export const userModel = model<TUser>("user", userSchema);
