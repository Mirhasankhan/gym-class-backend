import express from "express";
import { traineeController } from "./trainee.controller";
import authenticateToken from "../../middlewares/auth.middleware";

const router = express.Router();

router.post(
  "/create-booking",
  authenticateToken(["trainee"]),
  traineeController.updateBookingClass
);
router.get(
  "/my-bookings",
  authenticateToken(["trainee"]),
  traineeController.myBookings
);
router.delete(
  "/delete-booking",
  authenticateToken(["trainee"]),
  traineeController.deleteBooking
);

export const traineeRoutes = router;
