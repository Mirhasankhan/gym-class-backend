import { Schema, model } from "mongoose";
import { TSchedule } from "./admin.interface";

export const scheduleSchema = new Schema<TSchedule>({
  className: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  trainerId: { type: String, required: true },
  trainees: {
    type: [
      {
        traineeName: { type: String, required: true },
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
      },
    ],
    default: [],
  },
});

export const scheduleModel = model<TSchedule>("schedule", scheduleSchema);
