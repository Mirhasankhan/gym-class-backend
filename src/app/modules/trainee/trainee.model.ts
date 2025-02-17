import { model, Schema } from "mongoose";
import { TBooking } from "./trainee.interface";

export const bookingSchema = new Schema<TBooking>({
  traineeName: { type: String },
  date: { type: String, required: true },
  time: { type: String, required: true },
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
  scheduleId: { type: String, required: true },
});

export const bookingModel = model<TBooking>("booking", bookingSchema);
