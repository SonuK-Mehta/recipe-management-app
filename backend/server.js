// packages imports
dotenv.config();
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import { connect } from "mongoose";
import connectDB from "./config/db.js";
import testRoutes from "./routes/testRoute.js";
import recipesRouts from "./routes/recipesRouts.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

// mongoDB connection
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded body
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/recipes", recipesRouts);

// Error handling middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`.bgCyan.white);
});


/*
 * © 2025 Sonu Mehta. All rights reserved.  
 * The content, design, and code of this website are the property of Sonu Mehta.
 * Unauthorized use, reproduction, or redistribution is prohibited.
 * For permission to use, please contact **https://github.com/sonuk-mehta**.
 */

