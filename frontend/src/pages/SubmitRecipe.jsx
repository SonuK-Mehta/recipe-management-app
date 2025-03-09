import React, { useState } from "react";
import { createRecipe } from "../api/recipeApi";
import styles from "./SubmitRecipe.module.css";

const SubmitRecipe = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    categories: "",
    imageUrl: "",
  });

  const [errors, setErrors] = useState({});
  const categoryOptions = ["Breakfast", "Lunch", "Dinner", "Snacks"];

  const validateForm = () => {
    const newErrors = {};

    if (formData.title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters long.";
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = "At least one ingredient is required.";
    }

    if (formData.instructions.trim().length < 10) {
      newErrors.instructions =
        "Instructions must be at least 10 characters long.";
    }

    if (!formData.categories) {
      newErrors.categories = "Please select a category.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (category) => {
    setFormData((prev) => ({
      ...prev,
      categories: category, // ✅ Only one category can be selected
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await createRecipe({
        ...formData,
        ingredients: formData.ingredients.split(",").map((ing) => ing.trim()),
        imageUrl:
          formData.imageUrl.trim() ||
          "https://github.com/SonuK-Mehta/image-storage/blob/main/All%20Image.jpeg?raw=true", // ✅ Default image URL
      });

      alert("Recipe added successfully!");
      setFormData({
        title: "",
        ingredients: "",
        instructions: "",
        categories: "",
        imageUrl: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error adding recipe:", error);
      alert("Failed to add recipe.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1>Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className={styles.recipeForm}>
        {/* Title */}
        <div className={styles.formGroup}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.title && <span className={styles.error}>{errors.title}</span>}
        </div>

        {/* Ingredients */}
        <div className={styles.formGroup}>
          <label>Ingredients (comma-separated)</label>
          <input
            type="text"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.ingredients && (
            <span className={styles.error}>{errors.ingredients}</span>
          )}
        </div>

        {/* Instructions */}
        <div className={styles.formGroup}>
          <label>Instructions</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className={styles.textarea}
          ></textarea>
          {errors.instructions && (
            <span className={styles.error}>{errors.instructions}</span>
          )}
        </div>

        {/* Categories */}
        <div className={styles.formGroup}>
          <label>Category</label>
          <div className={styles.categoryOptions}>
            {categoryOptions.map((category) => (
              <label key={category} className={styles.categoryLabel}>
                <input
                  type="radio"
                  name="categories"
                  value={category}
                  checked={formData.categories === category}
                  onChange={() => handleCategoryChange(category)}
                />
                {category}
              </label>
            ))}
          </div>
          {errors.categories && (
            <span className={styles.error}>{errors.categories}</span>
          )}
        </div>

        {/* Image URL */}
        <div className={styles.formGroup}>
          <label>Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton}>
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default SubmitRecipe;
