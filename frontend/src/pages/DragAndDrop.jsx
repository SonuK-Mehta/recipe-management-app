import React from "react";
import styles from "./DragAndDrop.module.css"; // Import the CSS module

function DragAndDrop() {
  const isUnderConstruction = true; // Set to true to indicate it's under construction

  return (
    <div>
      {isUnderConstruction && (
        <div className={styles.underConstruction}>
          <h1>🚧 This page is under construction 🚧</h1>
          <p>
            We're working hard to bring this feature to you. Please check back
            later!
          </p>
        </div>
      )}
    </div>
  );
}

export default DragAndDrop;
