import { readStudents } from "../db/db.js";



const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    //Read the students from the database
    const students = await readStudents();
    
    // Find the student with the matching ID
    const student = students.find(
      (student) => String(student.id) === String(id)
    );

    // Check if the student exists or not
    if (!student) {   
      return res.status(404).json({
        success: false,
        message: `Student with ID ${id} not found.`,
        
      });
    }
    // If the student is found, send a success response with the student data
    res.status(200).json({
      success: true,
      message: "Student found successfully",
      data: student,
    });
  } catch (error) {
    console.error("Error retrieving student:", error);
  }
};

export default getStudentById;