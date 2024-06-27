import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";


const Contacts = () => {
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
      <div className={styles.ContactMe}>
        <h2 className={styles.title}>Contact</h2>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
            <input name="name" type="text" className={styles.feedbackInput} placeholder="Full Name" />
            <input name="text" type="text" className={styles.feedbackInput} placeholder="Subject" />   
            <input name="email" type="text" className={styles.feedbackInput} placeholder="Email" />
            <textarea name="text" className={styles.feedbackInput} placeholder="Drop your message here"></textarea>
          <button className={styles.showMoreBtn} type="submit" value="Send">Send</button>
        </form>
      </div>
    </section>
  );
  
};

export default Contacts;