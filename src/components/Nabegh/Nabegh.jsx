import React from 'react'; 
import styles from "./Nabegh.module.css";
import DownloadButtonAnimation from "./DownloadButtonAnimation.jsx";
import ViewMeButtonAnimation from "./ViewMeButtonAnimation.jsx";
import { getImageUrl } from '../../utils';

const Nabegh = () => {


    return (
        <section className={styles.home} id="home">
      <div className={styles.homecontent}>
        <h3>Hello, I am</h3>
        <h1>Nabegh Anane</h1>
        <p>As a Business Intelligence student, Full Stack Web Developer, Solidity contracts specialist, IT enthusiast, designer, video editor, cybersecurity researcher, advanced Python programmer, marketing planner, leader, and CEO & Founder of NEvolution LLC.</p>
        <div className={styles.socialmedia}>
              <a href="mailto:contact@nabeghanane.me" target="_blank" rel="noreferrer"><img src={getImageUrl("contact/email.png")} alt="Email icon" /></a>
							<a href="https://www.linkedin.com/in/nabegh-anane/" target="_blank" rel="noreferrer"><img src={getImageUrl("contact/linkedin.png")} alt="Linkedin icon" /></a>
							<a href="https://github.com/Nabegh-Anane" target="_blank" rel="noreferrer"><img src={getImageUrl("contact/github.png")} alt="Github icon" /></a>
							<a href="https://www.facebook.com/anane.nabegh/" target="_blank" rel="noreferrer"><img src={getImageUrl("contact/facebook.png")} alt="Facebook icon" /></a>
							<a href="https://www.instagram.com/nabegh_anane/" target="_blank" rel="noreferrer"><img src={getImageUrl("contact/instagram.png")} alt="Instagram icon" /></a>
							<a href="https://twitter.com/AnaneNabegh" target="_blank" rel="noreferrer"><img src={getImageUrl("contact/twitter.png")} alt="Twitter icon" /></a>
							<a href="https://www.behance.net/anenenebagh" target="_blank" rel="noreferrer"><img src={getImageUrl("contact/behance.png")} alt="Behance icon" /></a>
							<a href="https://codepen.io/nabegh-e" target="_blank" rel="noreferrer"><img src={getImageUrl("contact/codepen.png")} alt="CodePen icon" /></a>
							<a href="https://www.hackerrank.com/anenenebagh" target="_blank" rel="noreferrer"><img src={getImageUrl("contact/hackerrank.png")} alt="HackerRank icon" /></a>
							<a href="https://t.me/Nevo_07" target="_blank" rel="noreferrer"> <img src={getImageUrl("contact/telegram.png")} alt="Telegram icon" /></a>
							<a href="https://wa.me/+21699733961" target="_blank" rel="noreferrer"><img src={getImageUrl("contact/whatsapp.png")} alt="Whatsapp icon" /></a>
              <a href="https://dribbble.com/nabegh07" target="_blank" rel="noreferrer"><img src={getImageUrl("contact/dribbble.png")} alt="Dribbble icon" /></a>
        </div>
        <div className={styles.btnn}>
            <DownloadButtonAnimation />
            <ViewMeButtonAnimation /> 
        </div>
      </div>

      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
    </section>
    );
}

export default Nabegh;
