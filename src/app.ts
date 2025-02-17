import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoutes } from "./app/modules/user/user.route";
import { adminRoutes } from "./app/modules/admin/admin.router";
import { traineeRoutes } from "./app/modules/trainee/trainee.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1", adminRoutes);
app.use("/api/v1", traineeRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Worrld!");
});

export default app;
