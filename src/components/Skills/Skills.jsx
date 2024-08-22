import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
//import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";
const Skills = () => {
  const ReadMoreClick = () => {
    
  };
const urLL = "https://nabeghanane-portfolio.imgix.net/assets/";
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={historyItem.imageSrc}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}`}</h3>
                  <h4>{`${historyItem.organisation}`}</h4>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Link to={`/skills`}><button className={styles.showMoreBtn} onClick={ReadMoreClick}><span>Show More Skills</span></button></Link>
    </section>
  );
};

export default Skills;
