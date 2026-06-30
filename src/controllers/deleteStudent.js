import { readStudents, writeStudents } from "../db/db.js";

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    // Read all students
    const students = await readStudents();

    // Find the student
    const student = students.find(
      (student) => String(student.id) === String(id)
    );

    if (!student) {
      return res.status(404).json({
        success: false,
        message: `Student with ID ${id} not found.`,
      });
    }

    // Remove the student
    const updatedStudents = students.filter(
      (student) => String(student.id) !== String(id)
    );

    // Save updated data
    const saved = await writeStudents(updatedStudents);

    if (!saved) {
      return res.status(500).json({
        success: false,
        message: "Failed to delete student.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Student deleted successfully.",
      student,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default deleteStudent;