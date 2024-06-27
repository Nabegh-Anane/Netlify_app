import React from 'react';
import styles from './Skills.module.css';

const DBSkills = () => {

  return (
    <section className={styles.WebDev} id="DBSkills">
        <h2 className={styles.title}>Data Bases Skills</h2> 
        
        <div className={styles.skills} >
        <div className={styles.container} >
            
            <div className={styles.skillCarta}>
                <div className={styles.Carta}>
                <i className="bx bxl-postgresql"></i>
                    <h4>MySQL</h4>
                    <p>Manage relational databases and execute SQL queries with MySQL.</p>
                </div>
                
				
				<div className={styles.Carta}>
                <i className="bx bxl-microsoft" ></i>
                    <h4>Microsoft SQL Server</h4>
                    <p>Develop and maintain databases using Microsoft SQL Server.</p>
                </div>
				
				<div className={styles.Carta}>
                <i className="bx bx-data" ></i>
                    <h4>Oracle Database</h4>
                    <p>Administer and optimize Oracle Database systems.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="bx bxl-mongodb" ></i>
                    <h4>MongoDB</h4>
                    <p>Implement and manage NoSQL databases for flexible data storage.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="fa-solid fa-database" ></i>
                    <h4>Hadoop</h4>
                    <p>Process and analyze large-scale datasets using Hadoop.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="bx bxl-aws" ></i>
                    <h4>AWS</h4>
                    <p>Utilize Amazon Web Services for scalable and secure database solutions.</p>
                </div>
                
            </div>
        </div>
    </div>
    </section>
  );
}

export default DBSkills;