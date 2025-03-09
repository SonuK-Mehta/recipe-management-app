import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters long"],
    },
    ingredients: {
      type: [String],
      required: [true, "Ingredients are required"],
      validate: {
        validator: (value) => value.length > 0,
        message: "At least one ingredient is required",
      },
    },
    instructions: {
      type: String,
      required: [true, "Instructions are required"],
      minlength: [10, "Instructions must be at least 10 characters long"],
    },
    categories: {
      type: String,
      required: [true, "Category is required"],
      enum: ["Breakfast", "Lunch", "Dinner", "Snacks", "Dessert", "Drinks"],
    },
    imageUrl: {
      type: String,
      default: "https://example.com/default-recipe.jpg", // Set a default image
    },
  },
  { timestamps: true }
);

export default mongoose.model("Recipe", recipeSchema);
