import React, { useEffect, useState } from 'react';
import styles from "../Styles/About.module.css";
import Intro from "../pages/Skills/Into";
import NavSkill from "../components/Navbar/NavSkill";
import Footer from "../components/Footer/Footer";
import WebDev from "../pages/Skills/WebDev";
import MobileDev from "../pages/Skills/MobileDev";
import ProgSkills from "../pages/Skills/ProgSkills";
import DataSkills from "../pages/Skills/DataSkills";
import DBSkills from "../pages/Skills/DBSkills";
import ITSkills from "../pages/Skills/ITSkills";
import SoftSkills from "../pages/Skills/SoftSkills";
import Loader from '../pages/Privacy/Loader';
export default function About() {
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
        <div className={styles.AboutPage} id="skills">
          <NavSkill />
          <Intro />
          <WebDev />
          <MobileDev />
          <ProgSkills />
          <DataSkills />
          <DBSkills />
          <ITSkills />
          <SoftSkills />
          <Footer />
         </div>
  );
}
