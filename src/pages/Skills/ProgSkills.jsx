import React from 'react';
import styles from './Skills.module.css';

const ProgSkills = () => {

  return (
    <section className={styles.WebDev} id="ProgSkills">
        <h2 className={styles.title}>Programming Skills</h2> 
        
        <div className={styles.skills} >
        <div className={styles.container} >
            
            <div className={styles.skillCarta}>
                <div className={styles.Carta}>
                <i className="fa-solid fa-c"></i>
                    <h4>C</h4>
                    <p>Develop low-level applications and system software using the C language.</p>
                </div>
                
				
				<div className={styles.Carta}>
                <i className="bx bxl-c-plus-plus" ></i>
                    <h4>C++</h4>
                    <p>Utilize object-oriented programming for versatile software development.</p>
                </div>
				
				<div className={styles.Carta}>
                <i className="bx bxl-python" ></i>
                    <h4>Python</h4>
                    <p>Write concise, readable, and efficient code for various applications.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="bx bxl-java" ></i>
                    <h4>Java</h4>
                    <p>Build scalable and platform-independent applications with Java.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="fa-solid fa-r" ></i>
                    <h4>R</h4>
                    <p>Analyze and visualize statistical data using the R programming language.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="fa-solid fa-terminal" ></i>
                    <h4>Bash Programming</h4>
                    <p>Automate tasks and write scripts for system administration.</p>
                </div>
                
            </div>
        </div>
    </div>
    </section>
  );
}

export default ProgSkills;