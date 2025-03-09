import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { getRecipesByCategory } from "../api/recipeApi"; // Importing the API function
import styles from "./Category.module.css"; // Assuming you have a CSS file for styling

const Category = () => {
  const [categories] = useState(["Breakfast", "Lunch", "Dinner", "Snacks"]);
  const [selectedCategory, setSelectedCategory] = useState("Breakfast");
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes by category when selectedCategory changes
  useEffect(() => {
    if (selectedCategory) {
      const fetchRecipes = async () => {
        const data = await getRecipesByCategory(selectedCategory);
        setRecipes(data);
      };
      fetchRecipes();
    }
  }, [selectedCategory]);

  return (
    <section className={styles.categorySection}>
      <h2 className={styles.title}>Our Different Categories</h2>
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <button
            key={index}
            className={styles.categoryButton}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Recipes if a category is selected */}
      {selectedCategory && (
        <div>
          <div className={styles.dishes}>
            {recipes.map((recipe) => (
              <div key={recipe._id} className={styles.dishCard}>
                {/* Link added to navigate to RecipeDetails page */}
                <Link
                  to={`/recipe/${recipe._id}`}
                  className={styles.recipeLink}
                >
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    className={styles.dishImage}
                  />
                  <p className={styles.dishName}>{recipe.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Category;
