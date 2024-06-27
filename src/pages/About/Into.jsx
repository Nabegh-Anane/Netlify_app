import React from 'react';
import styles from './Intro.module.css';

const Intro = () => {


  return (
    <section className={styles.container} id="firsty">
    <h2 className={styles.title}></h2>
    <div id="firsty" className={styles.app}>
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.charizard} ${styles.animated}`}></div>
      </div>
    </div>
    <ul className={`${styles.menu} ${styles.cf}`}>
  <li><a href="#AboutMe">About Me</a></li>
  <li><a href="#Certificate">Certification</a></li>
  <li><a href="#Clubs">Soft skills</a></li>
  <li>
    <a href="#resume">Resume</a>
    <ul className={styles.submenu}>
      <li><a href="#LaT">Languages and Technologies</a></li>
      <li><a href="#Edc">Education</a></li>
      <li><a href="#Expr">Experience</a></li>
      <li><a href="#PHac">Participations and Hackathons</a></li>
    </ul>
  </li>
</ul> 
        
  </section>
      
    
  );
};

export default Intro;
