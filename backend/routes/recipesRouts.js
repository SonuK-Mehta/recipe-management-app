import express from "express";
import {
  createRecipeController,
  getAllRecipesController,
} from "../controllers/recipesController.js";

const router = express.Router();

// routes
// CREATE RECIPES || POST
router.post("/create-recipe", createRecipeController);

// GET RECIPES || GET
router.get("/get-recipes", getAllRecipesController);

export default router;
