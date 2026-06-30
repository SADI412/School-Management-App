import studentRoutes from "./studentRoutes.js  ";
import { Router } from "express";

const routes = Router();

routes.use("/students", studentRoutes);

export default routes;