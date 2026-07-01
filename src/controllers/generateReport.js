
import { readStudents } from "../db/db.js";


const generateReport = async (req, res) => {
  try {
    const students = await readStudents();

    if (students.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No students found."
      });
    }

    // Calculate total score
    const totalScore = students.reduce(
      (sum, student) => sum + Number(student.score),
      0
    );

    // Calculate average score
    const averageScore = Number(
      (totalScore / students.length).toFixed(2)
    );

    // Count passed students
    const passedStudents = students.filter(
      student => student.isPassed
    ).length;

    // Count failed students
    const failedStudents = students.filter(
      student => !student.isPassed
    ).length;

    // Highest score
    const highestScore = Math.max(
      ...students.map(student => Number(student.score))
    );

    // Lowest score
    const lowestScore = Math.min(
      ...students.map(student => Number(student.score))
    );

    const report = {
      totalStudents: students.length,
      passedStudents,
      failedStudents,
      totalScore,
      averageScore,
      highestScore,
      lowestScore,
      students
    };

    return res.status(200).json({
      success: true,
      message: "Student report generated successfully.",
      report
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export default generateReport;
