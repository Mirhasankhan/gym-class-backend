import { Request, Response } from "express";
import { traineeDB } from "./trainee.service";
const updateBookingClass = async (req: Request, res: Response) => {
  try {
    const { scheduleId, traineeName, email } = req.body;
    const result = await traineeDB.bookClass(scheduleId, traineeName, email);

    res.status(200).json({
      success: true,
      message: "Class Booked successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: `${err.message}`,
    });
  }
};

export const traineeController = {
  updateBookingClass,
};
