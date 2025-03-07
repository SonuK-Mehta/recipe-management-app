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
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Indian",
        "Italian",
        "Chinese",
        "Mexican",
        "American",
        "Mediterranean",
        "French",
        "Thai",
        "Vegetarian",
        "Dessert",
        "Vegan",
        "Breakfast",
        "Snacks",
      ], // Restrict categories to predefined values
    },
    imageUrl: {
      type: String,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Recipe", recipeSchema);
