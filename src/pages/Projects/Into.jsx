import React from 'react';
import styles from './Intro.module.css';

const Intro = () => {


  return (
    <section className={styles.container} id="MyProjects">
    <h2 className={styles.title}></h2>
    <div id="app" className={styles.app}>
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.charizard} ${styles.animated}`}></div>
      </div>
    </div> 
    <ul className={`${styles.menu} ${styles.cf}`}>
    <li><a href="#WebProj">Web Projects</a></li>
  <li><a href="#MobProj">Mobile Projects</a></li>
  <li><a href="#ProgProj">Programming Projects</a></li>
  <li><a href="#DataProj">Data Analyses Projects</a></li>
  <li><a href="#DesignProj">Design Projects</a></li>
</ul> 

        
  </section>
      
    
  );
};

export default Intro;
