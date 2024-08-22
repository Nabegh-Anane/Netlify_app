import React from 'react'; 
import styles from "./About.module.css";
import { Link } from "react-router-dom";
const About = () => {
    const animateButton = (e) => {
        e.preventDefault();
        // Reset animation
        e.target.classList.remove('animate');
        e.target.classList.add('animate');
        setTimeout(() => {
          e.target.classList.remove('animate');
        }, 700);
      };
      
    return (
        <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            src="https://nabeghanane-portfolio.imgix.net/assets/about/aboutImage.png"
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
          
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src="https://nabeghanane-portfolio.imgix.net/assets/about/webdev.png" alt="Web Developper icon" />
              <div className={styles.aboutItemText}>
              <h3>Full Stack Web Developer</h3>
                <p>Web development expertise fused into seamless, scalable solutions for exceptional user experiences.</p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src="https://nabeghanane-portfolio.imgix.net/assets/about/codedev.png" alt="Programmer icon" />
              <div className={styles.aboutItemText}>
              <h3>Problem Solver</h3>
                <p>Proven expert in crafting high-performance back-end systems, APIs, and solving complex problems efficiently.</p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src="https://nabeghanane-portfolio.imgix.net/assets/about/dataan.png" alt="DATA Analyste icon" />
              <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
                <p>Optimizing data analysis through proven design strategies, ensuring effective and visually appealing interfaces.</p>
              </div>
            </li>
          </ul>
        </div>
        <Link to={`/about`} ><button className={styles.showMoreBtn} ><span>Read More</span></button></Link>
          
      </section>
    );
}

export default About;
