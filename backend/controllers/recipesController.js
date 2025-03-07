import recipeModel from "../models/recipeModel.js";

// ======== CREATE RECIPE ======
export const createRecipeController = async (req, res, next) => {
  try {
    const { title, ingredients, instructions, categories } = req.body;

    if (!title || !ingredients || !instructions || !categories) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // req.body.author = req.user.userId;
    const newRecipe = await recipeModel.create(req.body);

    res.status(201).json({ newRecipe });
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
