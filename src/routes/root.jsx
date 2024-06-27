import React, { useEffect, useState } from 'react';
import styles from '../Styles/root.module.css';
import Navbar from '../components/Navbar/Navbar';
import Nabegh from '../components/Nabegh/Nabegh';
import About from '../components/About/About';
import Contacts from '../components/Contact/Contacts';
import Footer from '../components/Footer/Footer';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Loader from '../pages/Privacy/Loader';
export default function Root() {
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4500);
    };

    fakeDataFetch();
  }, []);
  useEffect(() => {
    // Load the reCAPTCHA API script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Define your callback function
    window.onloadCallback = function () {
      grecaptcha.render('g-recaptcha', {
        sitekey: '6Ldq26goAAAAALK0ENR5aqW2xPPBMpPCxBrQzwq1',
        size: 'invisible',
        callback: postRecaptchaMessageJs,
      });
      setTimeout(function () {
        grecaptcha.execute();
      }, 500);
    };

    // Your postRecaptchaMessageJs function
    function postRecaptchaMessageJs(hash) {
      console.warn(hash);
      window.postMessage({
        type: 'recaptchaSolvedHash',
        hash: hash,
        sitekey: '6Ldq26goAAAAALK0ENR5aqW2xPPBMpPCxBrQzwq1',
      }, '*');
    }
  }, []);

  return isLoading ? (
    <Loader /> ) : (
    <div className={styles.Root}>
      <Navbar />
      <Nabegh />
      <About id="#Intr"/>
      <Skills />
      <Projects />
      <Contacts />
      <Footer />

      <div className="g-recaptcha" id="g-recaptcha" data-sitekey="6Ldq26goAAAAALK0ENR5aqW2xPPBMpPCxBrQzwq1"></div>

      <div style={{ display: 'none' }} id="auto">auto</div>
    </div>
  );
}
