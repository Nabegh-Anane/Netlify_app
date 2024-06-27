import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";
export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo},
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageSrc}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill} 
            </li>
          );
        })}
      </ul>
      <div className={styles.skillsa}>
        <a href={demo} className={styles.link} target="_blank" rel="noreferrer">
        <i class='bx bx-git-branch'>Demo</i>
        </a>
        <Link to={`/projects`} className={styles.link}>
        <i class='bx bx-slideshow'>Preview</i>
        </Link>
      </div>
    </div>
  );
};