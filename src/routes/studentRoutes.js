import { Router } from "express";

import dbControllers from "../controllers/index.js";




const routes = Router();

// Mount student routes at the /api/students path
routes.get("/students/:report", dbControllers.generateReport);

routes.get("/students", dbControllers.getAllStudents);

routes.get("/students/average-score", dbControllers.getAverageScore); // api/students/average-score

routes.patch("/students/:id/:score", dbControllers.updateStudentScore);

routes.get("/students/:id", dbControllers.getStudentById); // Get /student/ID

routes.post("/students", dbControllers.createStudent); // Create a new student

routes.delete("/students/:id", dbControllers.deleteStudent); // Delete a student api/students/ID



export default routes;