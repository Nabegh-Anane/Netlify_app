import React from 'react';
import styles from './Skills.module.css';

const WebDev = () => {

  return (
    <section className={styles.WebDev} id="WebDev">
        <h2 className={styles.title}>Web Development Skills</h2> 
        
        <div className={styles.skills} >
        <div className={styles.container} >
            
            <div className={styles.skillCarta}>
                <div className={styles.Carta}>
                <i className="bx bxl-html5"></i>
                    <h4>HTML</h4>
                    <p>Structure web content with semantic markup for browsers.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="bx bxl-css3" ></i>
                    <h4>CSS</h4>
                    <p>Design responsive and visually appealing web page layouts.</p>
                </div>
				
				<div className={styles.Carta}>
                <i className="bx bxs-file-css" ></i>
                    <h4>SCSS</h4>
                    <p>Employ advanced styling techniques for enhanced CSS development.</p>
                </div>
				
				<div className={styles.Carta}>
                <i className="bx bxl-tailwind-css" ></i>
                    <h4>Tailwind</h4>
                    <p>Utilize a utility-first CSS framework for efficient styling.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="bx bxl-javascript" ></i>
                    <h4>JavaScript</h4>
                    <p>Develop dynamic and interactive features for web applications.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="bx bxl-bootstrap" ></i>
                    <h4> Bootstrap</h4>
                    <p>Create responsive and mobile-first design with this front-end framework.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="bx bxs-file-js" ></i>
                    <h4>ExpressJS</h4>
                    <p>Build robust and scalable server-side applications with Express.js.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="bx bxl-wordpress" ></i>
                    <h4>WordPress</h4>
                    <p>Customize and develop themes/plugins for the WordPress platform.</p>
                </div>

                <div className={styles.Carta}>
                <i className="bx bxl-react" ></i>
                    <h4>ReactJS</h4>
                    <p>Construct dynamic user interfaces for efficient web application development.</p>
                </div>
				
				<div className={styles.Carta}>
                <i className="bx bxl-vuejs" ></i>
                    <h4>ViteJS</h4>
                    <p>Employ a fast build tool for modern web development workflows.</p>
                </div>
				
				<div className={styles.Carta}>
                <i className="bx bxs-file-js" ></i>
                    <h4>ThreeJS</h4>
                    <p>Implement 3D graphics and visualizations in the browser.</p>
                </div>
				
				<div className={styles.Carta}>
                <i className="bx bxl-nodejs" ></i>
                    <h4>NodeJS</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et aliquid, ipsam.</p>
                </div>
				
				<div className={styles.Carta}>
                <i className="bx bxl-php" ></i>
                    <h4>PHP</h4>
                    <p>Develop server-side scripts for web applications and dynamic content.</p>
                </div>
				
				
				<div className={styles.Carta}>
                <i className="bx bxl-django" ></i>
                    <h4>Django</h4>
                    <p>Utilize a high-level Python web framework for rapid development.</p>
                </div>
				
				<div className={styles.Carta}>
                <i className="fa-brands fa-ethereum" ></i>
                    <h4>Solidity</h4>
                    <p>Create smart contracts for decentralized applications on the blockchain.</p>
                </div>

            </div>
        </div>
    </div>
    </section>
  );
}

export default WebDev;