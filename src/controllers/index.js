import getAllStudents from "./getAllStudents.js";
import getStudentById from "./getStudentById.js";
import createStudent from "./createStudents.js";
import updateStudentScore from "./updateStudentScore.js";
import deleteStudent from "./deleteStudent.js";

const dbControllers = { getAllStudents, 
                        getStudentById,
                        createStudent,
                        updateStudentScore,
                        deleteStudent };

export default dbControllers;