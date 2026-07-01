import getAllStudents from "./getAllStudents.js";
import getStudentById from "./getStudentById.js";
import createStudent from "./createStudents.js";
import updateStudentScore from "./updateStudentScore.js";
import deleteStudent from "./deleteStudent.js";
import getAverageScore from "./getAverageScore.js";
import generateReport from "./generateReport.js";




const dbControllers = { getAllStudents, 
                        getStudentById,
                        createStudent,
                        updateStudentScore,
                        deleteStudent,
                        getAverageScore,
                        generateReport };


export default dbControllers;