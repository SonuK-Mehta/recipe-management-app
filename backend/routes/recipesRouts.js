import express from "express";
import {
  createRecipeController,
  deleteRecipeController,
  getAllRecipesController,
  getOneRecipeController,
  getRecipesByCategoryController,
  getRecipesByTitle,
  updateRecipeController,
} from "../controllers/recipesController.js";

const router = express.Router();

// routes
// CREATE RECIPES || POST
router.post("/create-recipe", createRecipeController);

// GET RECIPES || GET
router.get("/get-recipe", getAllRecipesController);

// GET SINGLE RECIPES || GET
router.get("/recipe/:id", getOneRecipeController);

// UPDATE RECIPES || PUT
router.put("/update-recipe/:id", updateRecipeController);

// DELETE RECIPES || DELETE
router.delete("/delete-recipe/:id", deleteRecipeController);

// SEARCH RECIPES || GET
router.get("/search/:query", getRecipesByTitle);

// New route for fetching recipes by category
router.get("/category/:category", getRecipesByCategoryController);

export default router;
