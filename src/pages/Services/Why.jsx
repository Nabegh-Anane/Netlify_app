import React from 'react';
import styles from './Why.module.css';
import { Link } from "react-router-dom";

const Why = () => {
  return (
    <section className={styles.WhyChoseMe} id="WhyChoseMe">
    <div className={styles.container}>
    <div className="feat bg-gray pt-5 pb-5">
    <div className={styles.containeraw}>
      <div className={styles.row}>
        <div className={`${styles.sectionHeadi} col-sm-12`}>
          <h4 className={styles.hi4}><span className={styles.spani}>Why Choose</span> Me?</h4>
          <p className={styles.pi}>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has <Link to={`/skills`}><a>Skills</a></Link> been the industrys standard dummy text ever since the 1500s, when an <Link to={`/projects`}><a>Projects</a></Link> unknown book.</p>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className={styles.itemay}> <span className={`${styles.iconi} ${styles.featureBoxColOne}`}><i class='bx bx-universal-access'></i></span>
            <h6 className={styles.hi6}>Modern Design</h6>
            <p className={styles.pi}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className={styles.itemay}> <span className={`${styles.iconi} ${styles.featureBoxColTwo}`}><i class='bx bxl-xing' ></i></span>
            <h6 className={styles.hi6}>Creative Design</h6>
            <p className={styles.pi}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className={styles.itemay}> <span className={`${styles.iconi} ${styles.featureBoxColFhree}`}><i class='bx bx-circle-three-quarter' ></i></span>
            <h6 className={styles.hi6}>Your Photoshoping</h6>
            <p className={styles.pi}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className={styles.itemay}> <span className={`${styles.iconi} ${styles.featureBoxColFour}`}><i class='bx bxl-docker' ></i></span>
            <h6 className={styles.hi6}>Business Growth</h6>
            <p className={styles.pi}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className={styles.itemay}> <span className={`${styles.iconi} ${styles.featureBoxColFive}`}><i class='bx bxs-slideshow' ></i></span>
            <h6 className={styles.hi6}>Market Strategy</h6>
            <p className={styles.pi}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className={styles.itemay}> <span className={`${styles.iconi} ${styles.featureBoxColSix}`}><i class='bx bxs-id-card' ></i></span>
            <h6 className={styles.hi6}>Retina Ready</h6>
            <p className={styles.pi}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    </section> 
  );
};

export default Why;
