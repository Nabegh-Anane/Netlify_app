import React from 'react';
import styles from './AboutMe.module.css';
import { getImageUrl } from '../../utils';

const AboutMe = () => {


    return (
        <section className={styles.Certif} id="AboutMe">
        <h2 className={styles.title}>About Me</h2>
      <div className={styles.homecontent}>
        <h3>I am</h3>
        <h1>Nabegh Anane</h1>
        <p> Business Computing undergraduate specialized in Business Intelligence, with a strong grasp of Data 
Analysis, Front-end and Back-end web development, and mobile development domains. Passionate 
about data analysis and information technology, I am seeking an end-of-studies project internship 
to apply my diverse skills and make a significant contribution to your company.</p>
        <p>Throughout my studies, I have gained expertise in data manipulation, creating user-friendly 
interfaces, and developing high-performance mobile applications. I have also had the opportunity to 
work on real projects, applying my theoretical knowledge to solve complex problems.</p>
        <p> My goal is to implement my technical skills in a challenging professional environment while 
continuing to learn and grow. I am excited to contribute to innovative projects and gain practical 
experience in the fields of Business Intelligence and software development.</p>
         <div className={styles.socialmedia}>
                        	<a href="mailto:contact@nabeghanane.me"><img src={getImageUrl("contact/email.png")} alt="Email icon" /></a>
							<a href="https://www.linkedin.com/in/nabegh-anane/"><img src={getImageUrl("contact/linkedin.png")} alt="Linkedin icon" /></a>
							<a href="https://github.com/Nabegh-Anane"><img src={getImageUrl("contact/github.png")} alt="Github icon" /></a>
							<a href="https://www.facebook.com/anane.nabegh/"><img src={getImageUrl("contact/facebook.png")} alt="Facebook icon" /></a>
							<a href="https://www.instagram.com/nabegh_anane/"><img src={getImageUrl("contact/instagram.png")} alt="Instagram icon" /></a>
							<a href="https://twitter.com/AnaneNabegh"><img src={getImageUrl("contact/twitter.png")} alt="Twitter icon" /></a>
							<a href="https://www.behance.net/anenenebagh"><img src={getImageUrl("contact/behance.png")} alt="Behance icon" /></a>
							<a href="https://codepen.io/nabegh-e"><img src={getImageUrl("contact/codepen.png")} alt="CodePen icon" /></a>
							<a href="https://www.hackerrank.com/anenenebagh"><img src={getImageUrl("contact/hackerrank.png")} alt="HackerRank icon" /></a>
							<a href="https://t.me/Nevo_07"> <img src={getImageUrl("contact/telegram.png")} alt="Telegram icon" /></a>
							<a href="https://wa.me/+21699733961"><img src={getImageUrl("contact/whatsapp.png")} alt="Whatsapp icon" /></a>
              <a href="https://dribbble.com/nabegh07"><img src={getImageUrl("contact/dribbble.png")} alt="Dribbble icon" /></a>
        </div>
      </div>
    </section>
    );
}

export default AboutMe;
