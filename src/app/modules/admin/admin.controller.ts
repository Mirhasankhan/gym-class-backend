import { userDb } from "../user/user.service";
import { Request, Response } from "express";
import { adminDB } from "./admin.service";

const addNewTrainer = async (req: Request, res: Response) => {
  try {
    const trainee = req.body;
    const result = await userDb.createAccountToDB(trainee);

    res.status(200).json({
      success: true,
      message: "Trainee created successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(200).json({
      success: false,
      message: `${err.message}`,
    });
  }
};
const addNewSchedule = async (req: Request, res: Response) => {
  try {
    const schedule = req.body;
    const result = await adminDB.createSchedule(schedule);

    res.status(200).json({
      success: true,
      message: "Schedule created successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(200).json({
      success: false,
      message: `${err.message}`,
    });
  }
};

const getSchedules = async (req: Request, res: Response) => {
  try {
    const result = await adminDB.getAllSchedules();
    res.status(200).json({
      success: true,
      message: "Schedules retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: `${err.message}`,
    });
  }
};
const getTrainers = async (req: Request, res: Response) => {
  try {
    const result = await adminDB.getAllTrainer();
    res.status(200).json({
      success: true,
      message: "Trainers retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: `${err.message}`,
    });
  }
};
const assignScheduleTrainer = async (req: Request, res: Response) => {
  try {
    const { scheduleId, trainerId } = req.body;

    // if (!scheduleId || !trainerId) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Invalid Id",
    //   });
    // }

    const result = await adminDB.assignTrainer(scheduleId, trainerId);

    res.status(200).json({
      success: true,
      message: "Trainer Assigned successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: `${err.message}`,
    });
  }
};

const trainersSchedules = async (req: Request, res: Response) => {
  try {
    const { trainerId } = req.body;
    const result = await adminDB.getTrainerSchedules(trainerId);
    res.status(200).json({
      success: true,
      message: "Trainers Schedules Retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: `${err.message}`,
    });
  }
};

export const adminController = {
  addNewTrainer,
  addNewSchedule,
  getSchedules,
  getTrainers,
  assignScheduleTrainer,
  trainersSchedules,
};
