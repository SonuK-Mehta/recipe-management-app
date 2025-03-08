import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    ingredients: {
      type: [String],
      required: [true, "Ingredients are required"],
    },
    instructions: {
      type: String,
      required: [true, "Instructions are required"],
    },
    categories: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Indian",
        "Italian",
        "Chinese",
        "American",
        "Vegetarian",
        "Dessert",
        "Breakfast",
        "Snacks",
        "Drinks",
      ], // Restrict categories to predefined values
    },
    imageUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Recipe", recipeSchema);
