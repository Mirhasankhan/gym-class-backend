import express from "express";
import { adminController } from "./admin.controller";

const router = express.Router();

router.post("/create-trainer", adminController.addNewTrainer);
router.post("/create-schedule", adminController.addNewSchedule);
router.get("/all-schedules", adminController.getSchedules);
router.get("/all-trainers", adminController.getTrainers);
router.put("/assign-trainer", adminController.assignScheduleTrainer);
//this api for the trainer
router.get("/trainer-schedule", adminController.trainersSchedules);

export const adminRoutes = router;
