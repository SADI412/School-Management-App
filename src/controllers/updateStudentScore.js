import { readStudents, writeStudents } from "../db/db.js";

const updateStudentScore = async (req, res) => {
  try {
    const { id } = req.params;
    const { score } = req.body;

    // Validate score
    if (score === undefined || isNaN(score)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid score."
      });
    }

    // Read students
    const students = await readStudents();

    // Find student index
    const studentIndex = students.findIndex(
      student => String(student.id) === String(id)
    );

    if (studentIndex === -1) {
      return res.status(404).json({
        success: false,
        message: `Student with ID ${id} not found.`
      });
    }

    // Remove incorrect property if it exists
     delete students[studentIndex].ispassed;

    // Update score
    students[studentIndex].score = Number(score);

    //Update pass status
     students[studentIndex].isPassed = Number(score) >= 50;

    // Save updated students
    const saved = await writeStudents(students);

    if (!saved) {
      return res.status(500).json({
        success: false,
        message: "Failed to update student.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Student score updated successfully.",
      student: students[studentIndex]
    });

   } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export default updateStudentScore;