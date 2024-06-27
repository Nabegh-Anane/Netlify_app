import React from 'react';
import styles from './WebServeices.module.css';
import { getImageUrl } from '../../utils';

const WebServeices = () => {
  return (
    <section className={styles.freelance} id="WebServeices">
      <div className="container">
        <div className="row">
          <header className="col-xs-12"><img
                src={getImageUrl("about/NEvolution_blanc.png")}
                alt="Me sitting with a laptop"
                className={styles.aboutImage}
              />
            <h2 className={styles.headerTitle}>Nabegh Anane</h2>
            <h4 className={styles.headerSubtitle}>Web Design and Development</h4>
          </header>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className={styles.freelanceGrid}>
            <div className={styles.gridItemo}><i class='bx bxs-wrench' ></i>
              <div className={styles.itemOcontent}>
                <h3>Manage your Site</h3>
                <p>Built on a easy to use content management system, making managing your content a synch!</p>
              </div>
            </div>
            <div className={styles.gridItemo}><i class='bx bx-devices' ></i>
              <div className={styles.itemOcontent}>
                <h3>Responsive Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error sapiente cupiditate necessitatibu.</p>
              </div>
            </div>
            <div className={styles.gridItemo}><i class='bx bxs-hdd' ></i>
              <div className={styles.itemOcontent}>
                <h3>Dedicated Self-Hosting</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error sapiente cupiditate necessitatibu.</p>
              </div>
            </div>
            <div className={styles.gridItemo}><i class='bx bxs-analyse' ></i>
              <div className={styles.itemOcontent}>
                <h3>Strikingly Performant</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error sapiente cupiditate necessitatibu.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className={`col-xs-12 col-md-8 col-md-offset-2 ${styles.freelanceSignup}`}>
            <h3>Get Started</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed eum, repellendus, quod culpa expedita quam cumque obcaecati reprehenderit aliquam, mollitia ducimus saepe. Ea nemo pariatur eveniet doloribus, provident, tempora harum!</p><button className={styles.showMoreBtn} value="Schedule a Meeting">Schedule a Meeting</button>
          </div>
        </div>
      </div>
  </section> 
  );
};

export default WebServeices;
