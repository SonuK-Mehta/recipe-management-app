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
