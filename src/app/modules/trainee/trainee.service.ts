import { scheduleModel } from "../admin/admin.model";
import { bookingModel } from "./trainee.model";

const bookClass = async (
  scheduleId: string,
  traineeName: string,
  email: string
) => {
  const schedule = await scheduleModel.findById(scheduleId);
  if (!schedule) {
    throw new Error("Schedule not found");
  }
  if (schedule.trainees.length >= 10) {
    throw new Error("Class Is Full");
  }
  const emailExists = schedule.trainees.some(
    (trainee) => trainee.email === email
  );
  if (emailExists) {
    throw new Error("This user has already booked this class");
  }

  const newTrainee = { traineeName, email };
  schedule.trainees.push(newTrainee);
  await schedule.save();

  const booking = {
    scheduleId: scheduleId,
    traineeName: traineeName,
    email: email,
    date: new Date().toISOString().split("T")[0],
    time: new Date().toLocaleTimeString(),
  };
  const result = await bookingModel.create(booking);
  return result;
};

export const traineeDB = {
  bookClass,
};
