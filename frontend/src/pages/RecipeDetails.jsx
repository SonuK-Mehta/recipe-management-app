import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../api/recipeApi";
import styles from "./RecipeDetails.module.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getRecipeById(id);
        setRecipe(data.recipe);
        console.log(data.recipe);
      } catch (err) {
        console(err);
        setError("Failed to fetch recipe details.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!recipe) return <p className={styles.error}>Recipe not found.</p>;

  return (
    <div className={styles.recipeContainer}>
      {/* Recipe Image */}
      <img
        src={recipe.imageUrl}
        alt={recipe.title}
        className={styles.recipeImage}
      />

      {/* Title (Centered) */}
      <div className={styles.categories}>
        <h1 className={styles.recipeTitle}>{recipe.title}</h1>
        <h1 className={styles.categoryTag}>{recipe.categories}</h1>
      </div>

      {/* Ingredients List */}
      <div className={styles.section}>
        <h2>Ingredients:</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className={styles.section}>
        <h2>Instructions:</h2>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
