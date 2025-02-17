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
        email: { type: String, required: true },
      },
    ],
    default: [],
  },
});

export const scheduleModel = model<TSchedule>("schedule", scheduleSchema);
