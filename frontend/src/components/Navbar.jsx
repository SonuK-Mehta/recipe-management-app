import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logoLink}>
        RecipeHub
      </Link>

      <div
        className={`${styles.navLinks} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
      >
        <Link to="/recipes" className={styles.navLink}>
          View Recipes
        </Link>
        <Link to="/add-recipe" className={styles.navLink}>
          Add New Recipe
        </Link>
        <Link to="/meal-plan" className={styles.navLink}>
          Arrange Your Meal
        </Link>
      </div>

      {/* Search Bar with Button */}
      <div className={styles.searchBarContainer}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className={styles.form}
        >
          <input type="text" placeholder="Search..." className={styles.input} />
          <button className={styles.button}>Search</button>
        </form>
      </div>

      <div
        className={`${styles.burgerMenu} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
