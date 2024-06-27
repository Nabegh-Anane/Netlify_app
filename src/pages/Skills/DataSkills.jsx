import React from 'react';
import styles from './Skills.module.css';

const DataSkills = () => {

  return (
    <section className={styles.WebDev} id="DataSkills">
        <h2 className={styles.title}>Data Analyses Skills</h2> 
        
        <div className={styles.skills} >
        <div className={styles.container} >
            
            <div className={styles.skillCarta}>
                <div className={styles.Carta}>
                <i className="fa-solid fa-magnifying-glass-chart"></i>
                    <h4>Data Analysis</h4>
                    <p>Analyze and interpret complex datasets for informed decision-making.</p>
                </div>
                
				
				<div className={styles.Carta}>
                <i className="bx bxs-data" ></i>
                    <h4>SQL and Database Management</h4>
                    <p>Retrieve, manage, and manipulate data using SQL.</p>
                </div>
				
				<div className={styles.Carta}>
                <i className="fa-solid fa-chart-simple" ></i>
                    <h4>Data Visualization</h4>
                    <p>Present data insights through visually compelling charts and graphs.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="fa-solid fa-business-time" ></i>
                    <h4>Business Acumen</h4>
                    <p>Understand and apply business knowledge to data-driven decisions.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="fa-solid fa-code" ></i>
                    <h4>Programming and Scripting</h4>
                    <p>Write scripts to automate data processing and analysis.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="fa-solid fa-comments" ></i>
                    <h4>Communication Skills</h4>
                    <p>Effectively convey findings and insights to diverse stakeholders.</p>
                </div>
                
            </div>
        </div>
    </div>
    </section>
  );
}

export default DataSkills;