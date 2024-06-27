import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className="col-sm-12 col-md-6">
            <h6 className={styles.h6}>About</h6>
            <p className={styles.textJustify}>
              Nabegh Anane is a Junior Data Analyst and Business Intelligence Student with expertise in Data Analysis, Front-end, and Back-end web development, and mobile app development. Seeking an internship to apply these skills and contribute to a company's success. Experienced in IT support, system administration, software development, and digitization projects. Proficient in a variety of programming languages, web development technologies, and design tools. Active in university clubs and fluent in French, English, and Arabic. Hobbies include gaming, Taekwondo coaching, ethical pen testing, and design arts.
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6 className={styles.h6}>Categories</h6>
            <ul className={styles.footerLinks}>
              <li><Link to={`/projects`}><a>Data Analyse</a></Link></li>
              <li><Link to={`/projects`}><a>Web Development</a></Link></li>
              <li><Link to={`/projects`}><a>Mobile Development</a></Link></li>
              <li><Link to={`/skills`}><a>IT Knowledge</a></Link></li>
              <li><Link to={`/skills`}><a>Soft skills</a></Link></li>
              <li><Link to={`/about`}><a>Certification</a></Link></li>
            </ul>
          </div> 
          <div className="col-xs-6 col-md-3">
            <h6 className={styles.h6}>Quick Links</h6>
            <ul className={styles.footerLinks}>
              <li><Link to={`/about`}><a>About Me</a></Link></li>
              <li><Link to={`/contact`}><a>Contact Me</a></Link></li>
              <li><Link to={`/projects`}><a>Projects</a></Link></li>
              <li><Link to={`/skills`}><a>Skills</a></Link></li>
              <li><Link to={`/services`}><a>Services</a></Link></li>
              <li><Link to={`/privacy`}><a>Privacy Policy</a></Link></li>
            </ul>
          </div> 
        </div>
        <hr />
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.copyright}>
            <p className={styles.copyrightText}>
              Copyright © 2024 All Rights Reserved by <Link to={`/contact`}><a>Nabegh Anane</a></Link>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
