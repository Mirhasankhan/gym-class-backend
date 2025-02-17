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

const myBookings = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string | undefined;

    const result = await traineeDB.getBookings(email);
    res.status(200).json({
      success: true,
      message: "Bookings retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: `${err.message}`,
    });
  }
};

const deleteBooking = async (req: Request, res: Response) => {
  try {
    const { email, scheduleId } = req.body;

    const result = await traineeDB.cancelBooking(scheduleId, email);
    res.status(200).json({
      success: true,
      message: "Booking Deleted successfully",
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
  myBookings,
  deleteBooking,
};
