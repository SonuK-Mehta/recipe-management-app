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
      type: [String], // Supports multiple meal types
      required: [true, "At least one category is required"],
      enum: ["Breakfast", "Lunch", "Dinner", "Snacks"], // Fixed meal categories
    },
    imageUrl: {
      type: String,
      default:
        "https://github.com/SonuK-Mehta/image-storage/blob/main/All%20Image.jpeg?raw=true", // Set a default image
    },
  },
  { timestamps: true }
);

export default mongoose.model("Recipe", recipeSchema);
