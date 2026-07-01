import { readStudents } from "../db/db.js";

const getAverageScore = async (req, res) => {
  try {
    // Read all students
    const students = await readStudents();

    // Check if there are no students
    if (students.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No students found."
      });
    }

    // Calculate total score
    const totalScore = students.reduce(
      (total, student) => total + Number(student.score),
      0
    );

    // Calculate average score
    const averageScore = totalScore / students.length;

    return res.status(200).json({
      success: true,
      totalStudents: students.length,
      totalScore,
      averageScore: Number(averageScore.toFixed(2))
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export default getAverageScore;