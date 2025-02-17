import express from "express";
import { adminController } from "./admin.controller";
import authenticateToken from "../../middlewares/auth.middleware";

const router = express.Router();

router.post(
  "/create-trainer",
  authenticateToken(["admin"]),
  adminController.addNewTrainer
);
router.post(
  "/create-schedule",
  authenticateToken(["admin"]),
  adminController.addNewSchedule
);
router.get(
  "/all-schedules",
  authenticateToken(["admin"]),
  adminController.getSchedules
);
router.get(
  "/all-trainers",
  authenticateToken(["admin"]),
  adminController.getTrainers
);
router.put(
  "/assign-trainer",
  authenticateToken(["admin"]),
  adminController.assignScheduleTrainer
);
//this api for the trainer
router.get(
  "/trainer-schedule",
  authenticateToken(["trainer"]),
  adminController.trainersSchedules
);

export const adminRoutes = router;
