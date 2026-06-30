import fs from "fs/promises";
import path from "path";

// Get the current file location
const DB_PATH = path.resolve("./src/data/studentdb.json");

// Read all students
export const readStudents = async () => {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");

    return JSON.parse(data);
  } catch (error) {
    if(error.code === "ENOENT"){
        return [];
    }

    // Others errors
    throw error;
  }
};

// Write students to the JSON file
export const writeStudents = async (students) => {
  try {
    await fs.writeFile(
      DB_PATH,
      JSON.stringify(students, null, 2),
      "utf-8"
    );

    return true;
  } catch (error) {
    console.error("Error writing student data:", error.message);
    return false;
  }
};