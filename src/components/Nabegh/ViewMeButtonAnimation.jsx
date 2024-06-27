import React from "react";
import styles from "./DownloadButtonAnimation.module.css";
import { Link } from "react-router-dom";
const ViewMeButtonAnimation = () => {




  return (
    <div className={styles.container}>
      <Link to={`/contact`} className={`${styles.button} ${styles.dark}`}>
        <ul className="button">  
          <li className={styles.txt}>Find Me</li>
        </ul>
        </Link>
    </div>
  );
};

export default ViewMeButtonAnimation;
