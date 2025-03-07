import express from "express";
import { createRecipeController } from "../controllers/recipesController.js";

const router = express.Router();

// routes
// CREATE JOB || POST
router.post("/create-recipe", createRecipeController);

export default router;
