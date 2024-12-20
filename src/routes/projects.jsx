import React, { useEffect, useState } from 'react';
import styles from "../Styles/About.module.css";
import Intro from "../pages/Projects/Into";
import NavProjects from "../components/Navbar/NavProjects";
import Footer from "../components/Footer/Footer";
import Loader from '../pages/Privacy/Loader';
export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader /> ) : (
        <div className={styles.AboutPage} id="contact">
          <NavProjects />
          <Intro />
          <Footer />
         </div>
  );
}
