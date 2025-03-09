import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../api/recipeApi";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const fetchedRecipe = await getRecipeById(id);
      setRecipe(fetchedRecipe);
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <p>{recipe.instructions}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetails;
