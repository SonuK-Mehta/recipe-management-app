import React from "react";
import styles from "./HeroSection.module.css";
import indianFoodImage from "../assets/inidan_food.png";
import SurpriseMe from "./SurpriseMe";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <img
          src={indianFoodImage}
          alt="Delicious Indian Recipe"
          className={styles.heroImage}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Discover the Magic of Indian Cuisine</h1>
        <p className={styles.description}>
          Embark on a culinary journey through India's vibrant kitchens. From
          the rich, creamy curries of the North to the fiery, tangy flavors of
          the South, explore timeless recipes that have been passed down through
          generations. Whether you're craving a warm bowl of biryani or a plate
          of sizzling street food, our collection of authentic Indian dishes
          will bring the true essence of India right to your home.
        </p>
        <SurpriseMe />
      </div>
    </section>
  );
};

export default HeroSection;
