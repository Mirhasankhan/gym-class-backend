import express from "express";
import { traineeController } from "./trainee.controller";

const router = express.Router();

router.post("/create-booking", traineeController.updateBookingClass);
router.get("/my-bookings", traineeController.myBookings);
router.delete("/delete-booking", traineeController.deleteBooking);

export const traineeRoutes = router;
