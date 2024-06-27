import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContServ.module.css";
import { getImageUrl } from '../../utils';

const ContServ = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
            emailjs.sendForm("service_11bh4kv", "template_dbazy8m", form.current, "x5pPSbq1mfpwAEwX7").then(
              (result) => {
                console.log(result.text);
                console.log("Message sent");
              },
              (error) => {
                console.log(error.text);
              }
            );
    };

    return (
        <section className={styles.contact} id="contact">
        <h2 className={styles.title}>Contact</h2>
        <div className={styles.home} id="home">
      <div className={styles.homecontent}>
      <div id="appa" className={`${styles.appa} ${styles.heroImg}`}>
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.charizard} ${styles.animated}`}></div>
      </div>
      </div>
        <div className={styles.socialmedia}>
              <a href="mailto:contact@nabeghanane.me" target="_blank" rel="noreferrer"><img src={getImageUrl("contact/email.png")} alt="Email icon" /></a>
							<a href="https://www.linkedin.com/in/nabegh-anane/" target="_blank" rel="noreferrer"><img src={getImageUrl("contact/linkedin.png")} alt="Linkedin icon" /></a>
							<a href="https://github.com/Nabegh-Anane" target="_blank" rel="noreferrer"><img src={getImageUrl("contact/github.png")} alt="Github icon" /></a>
							<a href="https://www.behance.net/anenenebagh" target="_blank" rel="noreferrer"><img src={getImageUrl("contact/behance.png")} alt="Behance icon" /></a>
							<a href="https://codepen.io/nabegh-e" target="_blank" rel="noreferrer"><img src={getImageUrl("contact/codepen.png")} alt="CodePen icon" /></a>
							<a href="https://t.me/Nevo_07" target="_blank" rel="noreferrer"> <img src={getImageUrl("contact/telegram.png")} alt="Telegram icon" /></a>
							<a href="https://wa.me/+21699733961" target="_blank" rel="noreferrer"><img src={getImageUrl("contact/whatsapp.png")} alt="Whatsapp icon" /></a>
              
        </div>
      </div>

      <div id="app" className={styles.app}>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
            <input name="name" type="text" className={styles.feedbackInput} placeholder="Full Name" />
            <select name="subject" className={styles.subjects}>
                <option value="chose a service !!" selected>chose a service !!</option>
                <option value="webdev">Web Development</option>
                <option value="mobiledev">Mobile Development</option>
                <option value="graphicdev">Graphic Design</option>
                <option value="ign-reporting">IGN Reporting</option>
                <option value="motiondesign">Motion Design</option>
                <option value="presentations">Presentations</option>
                <option value="dataanalysing">Data Analysis</option>
                <option value="datacleaning">Data Cleaning</option>
                <option value="programming">Probramming</option>
                <option value="problemsolving">Problem Solving</option>
            </select>
            <input name="email" type="text" className={styles.feedbackInput} placeholder="Email" />
            <textarea name="text" className={styles.feedbackInput} placeholder="Drop your message here"></textarea>
          <button className={styles.showMoreBtn} type="submit" value="Send">Send</button>
        </form>
    </div>
    </div>
    
    </section>
    );
}

export default ContServ;
