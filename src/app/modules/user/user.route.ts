import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create-account", userController.addNewUser);
router.post("/login-account", userController.loginUser);

export const userRoutes = router;
