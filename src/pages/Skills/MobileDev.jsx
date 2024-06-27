import React from 'react';
import styles from './Skills.module.css';

const MobileDev = () => {

  return (
    <section className={styles.WebDev} id="MobileDev">
        <h2 className={styles.title}>Mobile Development Skills</h2> 
        
        <div className={styles.skills} >
        <div className={styles.container} >
            
            <div className={styles.skillCarta}>
                <div className={styles.Carta}>
                <i className="fa-brands fa-dev"></i>
                    <h4>WinDev Mobile</h4>
                    <p>Develop cross-platform mobile applications using WinDev.</p>
                </div>
                
				
				<div className={styles.Carta}>
                <i className="fa-solid fa-republican" ></i>
                    <h4>Gradle</h4>
                    <p>Manage and automate the build process for Android applications.</p>
                </div>
				
				<div className={styles.Carta}>
                <i className="bx bxs-file-json" ></i>
                    <h4>JSON</h4>
                    <p>Exchange data between server and mobile applications efficiently.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="bx bxl-java" ></i>
                    <h4>Java</h4>
                    <p>Build native Android applications with the Java programming language.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="fa-solid fa-file-code" ></i>
                    <h4>XML</h4>
                    <p>Structure and store data in a readable format for mobile apps.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="bx bxl-flutter" ></i>
                    <h4>Flutter</h4>
                    <p>Create natively compiled applications for mobile, web, and desktop.</p>
                </div>
                
            </div>
        </div>
    </div>
    </section>
  );
}

export default MobileDev;