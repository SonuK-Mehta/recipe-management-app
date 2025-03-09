import React from "react";
import styles from "./HowItWorks.module.css";
import img1 from "../assets/indian-cuisine.jpeg";
import img2 from "../assets/haveFun.jpeg";
import img3 from "../assets/cooking.jpeg";

const HowItWorks = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Here's How It Works</h2>
      <div className={styles.steps}>
        <div className={styles.step}>
          <img
            src={img1} // Add image source here
            alt="Find Recipe"
            className={styles.image}
          />
          <h3 className={styles.subheading}>Find Recipe</h3>
          <p className={styles.description}>
            Explore a wide range of delicious recipes from different regions of
            India. Find the perfect one to satisfy your cravings.
          </p>
        </div>

        <div className={styles.step}>
          <img
            src={img2} // Add image source here
            alt="Cook and Have Fun"
            className={styles.image}
          />
          <h3 className={styles.subheading}>Cook and Have Fun!</h3>
          <p className={styles.description}>
            Get cooking with easy-to-follow instructions, and have fun while
            creating flavorful dishes in your kitchen.
          </p>
        </div>

        <div className={styles.step}>
          <img
            src={img3} // Add image source here
            alt="Create a New Recipe"
            className={styles.image}
          />
          <h3 className={styles.subheading}>Create a New Recipe</h3>
          <p className={styles.description}>
            Be the chef of your own kitchen! Add your own recipes and share them
            with the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
