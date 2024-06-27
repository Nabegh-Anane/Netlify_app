import React from "react";
import styles from "./DownloadButtonAnimation.module.css";

const DownloadButtonAnimation = () => {

  let downloadUrl = "https://download944.mediafire.com/wgasvblht2zgFz6E1DDLvdupTkBX7PTCTkPCGweA5j9z5K1hL6GzI6MbUjh0OOeZK7yKziktD2zzIwHW-JV7xXLKPSTO6HNbSVV1KwZ_wYEkPX-SP5ZgNbVi8S5p-m1nK7MsPR0-nEI66Li-E-ReqK0dIhdGShUjk9RnXmmIaAUQMQ/emoq4bx36e5055g/CV+Nabegh+Anane+Ang.pdf";


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
