import React, { useEffect, useState } from 'react';
import styles from "../Styles/About.module.css";
import NavAbout from "../components/Navbar/NavAbout";
import Footer from "../components/Footer/Footer";
import Why from "../pages/Services/Why";
import WebServeices from "../pages/Services/WebServeices";
import ContServ from "../pages/Services/ContServ";
import Loader from '../pages/Privacy/Loader';
export default function Services() {

  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader /> ) : (
        <div className={styles.AboutPage} id="abouts">
          <NavAbout />
          <Why />
          <WebServeices />
          <ContServ />
          <Footer />
         </div>  
  );
}
