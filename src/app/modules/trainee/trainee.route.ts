import express from "express";
import { traineeController } from "./trainee.controller";

const router = express.Router();

router.post("/create-booking", traineeController.updateBookingClass);

export const traineeRoutes = router;
