import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecipes } from "../api/recipeApi"; // API function to fetch recipes
import styles from "./AllRecipes.module.css"; // Import the CSS module

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRecipes();
      setRecipes(data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.recipeContainer}>
      <h1>All Recipes</h1>
      <div className={styles.recipeList}>
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe._id}`}
            key={recipe._id}
            className={styles.recipeLink}
          >
            <div className={styles.recipeItem}>
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className={styles.recipeImage}
              />
              <div className={styles.recipeInfo}>
                <h2 className={styles.recipeTitle}>{recipe.title}</h2>
                <p className={styles.recipeCategory}>{recipe.categories}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
