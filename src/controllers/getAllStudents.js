import { readStudents } from "../db/db.js";

const getAllStudents = async (req, res) => {
  try {
    // Read students from the database
    const students = await readStudents();


    res.status(200).json({
      success: true,
      count: students.length,
      data: students,
    });
  } catch (error) {
    console.error("Error retrieving students:", error);
  }
};

export default getAllStudents;