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
            I'm Nabegh Anane, a passionate Business Intelligence professional with a strong focus on data analysis, Full Stack development, and creating user-friendly interfaces. My academic journey and hands-on experience have equipped me with the skills to turn complex data into actionable insights. I'm dedicated to leveraging cloud computing, automation, and web development to deliver impactful, data-driven solutions. Let's connect and explore how I can bring my expertise to your next project, driving innovation and success.
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
              <li><Link to={`/about#Certificate`}><a>Certification</a></Link></li>
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
