import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.text}>
          Crafted with ❤️ by <strong>Sonu Mehta</strong>
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/sonuk-mehta"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            GitHub
          </a>
          <a
            href="https://x.com/SonukMehta7"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
