import React from "react";
import styles from "./DownloadButtonAnimation.module.css";

const DownloadButtonAnimation = () => {

  let downloadUrl = "https://drive.google.com/uc?export=download&id=1lZxiDTD0WqNRU4UbKgLWnoiRuyk74NPA";


  return (
    <div className={styles.container}>

      <a href={downloadUrl} className={`${styles.button} ${styles.dark}`}>
        <ul >
          <li className={styles.txt}>Download Resume</li>
        </ul>
      </a>
    </div>
  );
};

export default DownloadButtonAnimation;
