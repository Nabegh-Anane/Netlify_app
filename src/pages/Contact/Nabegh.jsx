import React from 'react'; 
import styles from "./Nabegh.module.css";

const Nabegh = () => {


    return (
        <section className={styles.home} id="home">
      <div className={styles.homecontent}>
        <h3>Thank you</h3>
        <h1>for visiting my portfolio!</h1>
        <p>I'm Nabegh Anane, a dedicated professional in Business Intelligence and web development. Whether you're looking to collaborate on a project, have questions, or simply want to connect, I'm always open to new opportunities and challenges. Feel free to reach out through the form below, and let's start a conversation about how we can work together to achieve your goals.</p>
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

      <div id="app" className={`${styles.app} ${styles.heroImg}`}>
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.charizard} ${styles.animated}`}></div>
      </div>
    </div>
    </section>
    );
}

export default Nabegh;
