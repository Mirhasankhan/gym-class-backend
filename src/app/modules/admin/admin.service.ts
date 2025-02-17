import { userModel } from "../user/user.model";
import { TSchedule } from "./admin.interface";
import { scheduleModel } from "./admin.model";

const createSchedule = async (schedule: TSchedule) => {
  const { date } = schedule;

  const existingSchedules = await scheduleModel.countDocuments({ date });
  if (existingSchedules >= 5) {
    throw new Error("Maximum of 5 classes per day reached");
  }

  const result = await scheduleModel.create(schedule);
  return result;
};
const getAllSchedules = async () => {
  return await scheduleModel.find();
};
const getAllTrainer = async () => {
  return await userModel.find({ role: "trainer" });
};

const assignTrainer = async (scheduleId: string, trainerId: string) => {
  const schedule = await scheduleModel.findById(scheduleId);
  if (!schedule) {
    throw new Error("Schedule not found");
  }

  schedule.trainerId = trainerId;
  const result = await schedule.save();
  return result;
};

//this api is create for Trainer
const getTrainerSchedules = async (trainerId: string) => {
  return await scheduleModel.find({ trainerId: trainerId });
};

export const adminDB = {
  createSchedule,
  getAllSchedules,
  getAllTrainer,
  assignTrainer,
  getTrainerSchedules,
};
