import React, { useEffect } from "react";
import styles from "./SubmitButton.module.css";

const SubmitButton = () => {
  // Initialize the "disabled" state and canvas context (ctx)
  let disabled = false;
  let ctx;

  const clickButton = () => {
    if (!disabled) {
      disabled = true;

      // Loading stage
      const button = document.getElementById('button');
      button.classList.add(styles.loading);
      button.classList.remove(styles.ready);

      setTimeout(() => {
        // Completed stage
        button.classList.add(styles.complete);
        button.classList.remove(styles.loading);

        setTimeout(() => {
          initBurst();
          setTimeout(() => {
            // Reset button so the user can select it again
            disabled = false;
            button.classList.add(styles.ready);
            button.classList.remove(styles.complete);
          }, 4000);
        }, 320);
      }, 1800);
    }
  };

  // Initialize the canvas
  useEffect(() => {
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx = canvas.getContext('2d');
      render();
    }
  }, []);

  // Constants and functions related to the animation
  const confettiCount = 20;
  const sequinCount = 10;
  const gravityConfetti = 0.3;
  const gravitySequins = 0.55;
  const dragConfetti = 0.075;
  const dragSequins = 0.02;
  const terminalVelocity = 3;

  // Rest of the code for the animation
  // ...

  return (
    <div>
      <button id="button" className={`${styles.ready}`} onClick={clickButton}>
        <div className={`${styles.message} ${styles.submitMessage}`}>
          <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Insert SVG path for the submit button */}
          </svg>
          <span className={styles.buttonText}>Submit</span>
        </div>

        <div className={`${styles.message} ${styles.loadingMessage}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17">
            {/* Insert SVG path for the loading message */}
          </svg>
        </div>

        <div className={`${styles.message} ${styles.successMessage}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 11">
            {/* Insert SVG path for the success message */}
          </svg>
          <span className={styles.buttonText}>Success</span>
        </div>
      </button>
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default SubmitButton;
