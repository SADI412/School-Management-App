import express from "express";
import routes from "./routes/studentRoutes.js";


// Create an instance of the Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// ----- API Routes -----
app.use("/api", routes);



export default app;