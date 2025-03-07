import express from "express";
import {
  createRecipeController,
  getAllRecipesController,
  updateRecipeController,
} from "../controllers/recipesController.js";

const router = express.Router();

// routes
// CREATE RECIPES || POST
router.post("/create-recipe", createRecipeController);

// GET RECIPES || GET
router.get("/get-recipe", getAllRecipesController);

// UPDATE RECIPES || PUT
router.put("/update-recipe/:id", updateRecipeController);

export default router;
