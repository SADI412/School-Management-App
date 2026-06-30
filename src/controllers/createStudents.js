import { readStudents, writeStudents } from "../db/db.js";

const createStudent = async (req, res) => {
  try {
    const { name, age, course, score } = req.body;

    // Validate required fields
    if (!name || !age || !course || score === undefined) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, age, course and score."
      });
    }

    // Read existing students
    const students = await readStudents();

    // Generate a new ID
    const newId =
      students.length > 0
        ? Math.max(...students.map(student => student.id)) + 1
        : 1;
     
    // check if the student already exists based on name and course
    const duplicateStudent = students.find(
       
      student =>
        student.name.toLowerCase() === name.toLowerCase() &&
        student.course.toLowerCase() === course.toLowerCase()
    );

    if (duplicateStudent) {
       return res.status(409).json({
       success: false,
      //  message: "Student already exists." 
       message: `Student with ID ${newId} already exists.`});
    }   
     
    const isPassed = score >= 50;

    // Create new student object
    const newStudent = {
      id: newId,
      name,
      age,
      course,
      score,
      isPassed
    };

    // Add to array
    students.push(newStudent);

    // Save to studentdb.json
    const saved = await writeStudents(students);

    if (!saved) {
      return res.status(500).json({
        success: false,
        message: "Failed to save student."
      });
    }

    return res.status(201).json({
      success: true,
      message: "Student created successfully.",
      student: newStudent
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export default createStudent;