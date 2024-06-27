import React, { useEffect, useState } from 'react';
import styles from "../Styles/About.module.css";
import NavAbout from "../components/Navbar/NavAbout";
import Footer from "../components/Footer/Footer";
import Header from "../pages/About/Header";
import Certificate from "../pages/About/Certificate";
import Resume from "../pages/About/Resume";
import Intro from "../pages/About/Into";
import AboutMe from "../pages/About/AboutMe";
import Loader from '../pages/Privacy/Loader';
export default function About() {
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
        <div className={styles.AboutPage} id="abouts">
          <NavAbout />
          <Intro />
          <AboutMe />
          <Certificate />
          <Header />
          <Resume />
          <Footer />
         </div>
  );
}
