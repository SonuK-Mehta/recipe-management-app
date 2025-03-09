import React, { useState } from "react";
import { getRecipes } from "../api/recipeApi"; // Your API function to fetch recipes
import styles from "./SurpriseMe.module.css"; // Your CSS module

const SurpriseMe = () => {
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleSurpriseMe = async () => {
    setLoading(true); // Set loading to true
    try {
      const recipes = await getRecipes(); // Fetch recipes from API
      const randomIndex = Math.floor(Math.random() * recipes.length); // Get a random recipe index
      setRandomRecipe(recipes[randomIndex]); // Set random recipe to state
      setShowModal(true); // Show modal with recipe details
    } catch (err) {
      console.error("Error fetching recipes", err);
    } finally {
      setLoading(false); // Set loading to false once fetch is done
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
    setRandomRecipe(null); // Reset recipe data
  };

  return (
    <div className={styles.surpriseMeContainer}>
      {/* Surprise Me button */}
      <button
        className={styles.surpriseButton}
        onClick={handleSurpriseMe}
        disabled={loading}
      >
        {loading ? "Surprising..." : "Surprise Me!"}
      </button>

      {/* Modal to display the recipe */}
      {showModal && randomRecipe && (
        <div className={styles.modalBackdrop} onClick={handleCloseModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={handleCloseModal}>
              X
            </button>
            <img
              src={randomRecipe.imageUrl}
              alt={randomRecipe.title}
              className={styles.recipeImage}
            />
            <div className={styles.recipeInfo}>
              <h2 className={styles.recipeTitle}>{randomRecipe.title}</h2>
              <p className={styles.recipeCategory}>{randomRecipe.categories}</p>

              <div className={styles.section}>
                <h3>Ingredients:</h3>
                <ul className={styles.ingredientList}>
                  {randomRecipe.ingredients.map((ingredient, index) => (
                    <li key={index} className={styles.ingredientItem}>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.section}>
                <h3>Instructions:</h3>
                <p>{randomRecipe.instructions}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurpriseMe;
