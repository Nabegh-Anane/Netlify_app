import React from 'react';
import styles from './Intro.module.css';

const Intro = () => {


  return (
    <section className={styles.container} id="MySkills">
    <h2 className={styles.title}></h2>
    <div id="app" className={styles.app}>
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.charizard} ${styles.animated}`}></div>
      </div>
    </div> 
    <ul className={`${styles.menu} ${styles.cf}`}>
  <li><a href="#WebDev">Web Development</a></li>
  <li><a href="#MobileDev">Mobile Development</a></li>
  <li><a href="#ProgSkills">software development</a></li>
  <li><a href="#DataSkills">Data Analyses</a></li>
  <li><a href="#DBSkills">Data Bases</a></li>
  <li><a href="#ITSkills">IT Knowladge</a></li>
  <li><a href="#SoftSkills">Soft skills</a></li>
</ul> 

        
  </section>
      
    
  );
};

export default Intro;
