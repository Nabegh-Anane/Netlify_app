import React from 'react';
import styles from './AboutMe.module.css';
//import { getImageUrl } from '../../utils';

const AboutMe = () => {


    return (
        <section className={styles.Certif} id="AboutMe">
        <h2 className={styles.title}>About Me</h2>
      <div className={styles.homecontent}>
        <h3>I am</h3>
        <h1>Nabegh Anane</h1>
        <p>I am a passionate Data Scientist and Analyst with a strong foundation in data analysis, programming, and machine learning. I hold a degree in Business Intelligence and am currently pursuing an undergraduate degree in Data Science at ESPRIT, the Private Higher School of Engineering and Technology in Tunisia. My expertise spans various programming languages, including Python, R, SQL, and Java, allowing me to tackle complex data challenges effectively. I am proficient in data visualization tools such as Microsoft Power BI and Tableau, enabling me to transform raw data into actionable insights that drive informed decision-making.</p>
        <p>I have hands-on experience in machine learning and artificial intelligence, utilizing libraries like Scikit-learn and TensorFlow to build predictive models. My background in web development equips me with the skills to create user-friendly applications that enhance data accessibility and usability. Additionally, I have a solid understanding of databases, including MySQL, PostgreSQL, and MongoDB, as well as big data technologies such as Hadoop and Spark.</p>
        <p>I thrive in collaborative environments and am adept at communicating complex data concepts to diverse audiences. With a strong commitment to continuous learning, I stay updated on industry trends and advancements, ensuring I can leverage the latest tools and techniques to deliver impactful results. I am excited to connect with like-minded professionals and explore opportunities where I can apply my skills to create innovative, data-driven solutions.</p>
        <div className={styles.socialmedia}>
              <a href="mailto:contact@nabeghanane.com" target="_blank" rel="noreferrer"><img src="https://nabeghanane-portfolio.imgix.net/assets/contact/email.png" alt="Email icon" /></a>
							<a href="https://www.linkedin.com/in/nabegh-anane/" target="_blank" rel="noreferrer"><img src="https://nabeghanane-portfolio.imgix.net/assets/contact/linkedin.png" alt="Linkedin icon" /></a>
							<a href="https://github.com/Nabegh-Anane" target="_blank" rel="noreferrer"><img src="https://nabeghanane-portfolio.imgix.net/assets/contact/github.png" alt="Github icon" /></a>
							<a href="https://www.facebook.com/anane.nabegh/" target="_blank" rel="noreferrer"><img src="https://nabeghanane-portfolio.imgix.net/assets/contact/facebook.png" alt="Facebook icon" /></a>
							<a href="https://www.instagram.com/nabegh_anane/" target="_blank" rel="noreferrer"><img src="https://nabeghanane-portfolio.imgix.net/assets/contact/instagram.png" alt="Instagram icon" /></a>
							<a href="https://twitter.com/AnaneNabegh" target="_blank" rel="noreferrer"><img src="https://nabeghanane-portfolio.imgix.net/assets/contact/twitter.png" alt="Twitter icon" /></a>
							<a href="https://www.behance.net/anenenebagh" target="_blank" rel="noreferrer"><img src="https://nabeghanane-portfolio.imgix.net/assets/contact/behance.png" alt="Behance icon" /></a>
							<a href="https://codepen.io/nabegh-e" target="_blank" rel="noreferrer"><img src="https://nabeghanane-portfolio.imgix.net/assets/contact/codepen.png" alt="CodePen icon" /></a>
							<a href="https://www.hackerrank.com/anenenebagh" target="_blank" rel="noreferrer"><img src="https://nabeghanane-portfolio.imgix.net/assets/contact/hackerrank.png" alt="HackerRank icon" /></a>
							<a href="https://t.me/Nevo_07" target="_blank" rel="noreferrer"> <img src="https://nabeghanane-portfolio.imgix.net/assets/contact/telegram.png" alt="Telegram icon" /></a>
							<a href="https://wa.me/+21699733961" target="_blank" rel="noreferrer"><img src="https://nabeghanane-portfolio.imgix.net/assets/contact/whatsapp.png" alt="Whatsapp icon" /></a>
              <a href="https://dribbble.com/nabegh07" target="_blank" rel="noreferrer"><img src="https://nabeghanane-portfolio.imgix.net/assets/contact/dribbble.png" alt="Dribbble icon" /></a>
        </div>
      </div>
    </section>
    );
}

export default AboutMe;
