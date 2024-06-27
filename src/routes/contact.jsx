import React, { useEffect, useState } from 'react';
import styles from "../Styles/About.module.css";
import NavContact from "../components/Navbar/NavContact";
import Contacts from '../components/Contact/Contacts';
import Footer from "../components/Footer/Footer";
import Nabegh from "../pages/Contact/Nabegh";
import Loader from '../pages/Privacy/Loader';
export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader /> ) : (
        <div className={styles.AboutPage} id="contact">
          <NavContact />
          <Nabegh />
          <Contacts />
          <Footer />
         </div>  
  );
}
