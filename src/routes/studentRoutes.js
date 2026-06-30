import { Router } from "express";
// import  getAllStudents from "../controllers/getAllStudents.js";
// import getStudentById from "../controllers/getStudentById.js";
// import createStudentController from "../controllers/createStudents.js";
// import updateStudentScore from "../controllers/updateStudentScore.js";
// import deleteStudent from "../controllers/deleteStudent.js";
import dbControllers from "../controllers/index.js";




const routes = Router();

// Mount student routes at the /api/students path
routes.get("/students", dbControllers.getAllStudents);
routes.patch("/students/:id/:score", dbControllers.updateStudentScore);
routes.get("/students/:id", dbControllers.getStudentById); // Get /student/ID
routes.post("/students", dbControllers.createStudent); // Create a new student
routes.delete("/students/:id", dbControllers.deleteStudent); // Delete a student api/students/ID



export default routes;