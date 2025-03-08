import recipeModel from "../models/recipeModel.js";

// ======== CREATE RECIPE ======
export const createRecipeController = async (req, res, next) => {
  try {
    const { title, ingredients, instructions, categories, imageUrl } = req.body;

    if (!title || !ingredients || !instructions || !categories) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // req.body.author = req.user.userId;
    const newRecipe = await recipeModel.create(req.body);

    res.status(201).json({
      message: "Recipe added successfully",
      totalAdded: newRecipe.length,
      newRecipe,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating recipe" });
  }
};

//=========== GET RECIPE =========
export const getAllRecipesController = async (req, res, next) => {
  try {
    const recipes = await recipeModel.find();
    res.status(200).json({
      totalRecipes: recipes.length,
      recipes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ========= UPDATE RECIPES =========
export const updateRecipeController = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);

    // Directly update the recipe
    const updatedRecipe = await recipeModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    // If recipe is not found, return 404
    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating recipe" });
  }
};

// ============ DELETE RECIPE =========
export const deleteRecipeController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedRecipe = await recipeModel.findByIdAndDelete(id);

    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "Recipe deleted" });
  } catch (error) {
    // res.status(500).json({ message: "Error deleting recipe" });
    next(error);
  }
};

// ============= SERCH RECIPE ================

// Controller to get recipes by title
export const getRecipesByTitle = async (req, res) => {
  const { query } = req.params; // Get the query from the URL

  try {
    // Search for recipes by title, case-insensitive search
    const recipes = await recipeModel.find({
      title: { $regex: query, $options: "i" }, // 'i' makes it case-insensitive
    });

    if (recipes.length === 0) {
      return res.status(404).json({
        message: "No recipes found",
      });
    }

    return res.json({
      totalRecipes: recipes.length,
      recipes,
    });
  } catch (error) {
    next(error);
  }
};

// ========== GET RECIPES BY CATEGORY ==========
export const getRecipesByCategoryController = async (req, res, next) => {
  try {
    const { category } = req.params; // Extract category from request params

    // Find all recipes that match the category
    const recipes = await recipeModel.find({
      categories: { $regex: category, $options: "i" }, // 'i' makes it case-insensitive
    });

    // If no recipes found for the category
    if (recipes.length === 0) {
      return res
        .status(404)
        .json({ message: `No recipes found for category: ${category}` });
    }

    res.status(200).json({
      totalRecipes: recipes.length,
      recipes,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
