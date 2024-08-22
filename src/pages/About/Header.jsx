import React from 'react';
import styles from './Header.module.css';
//import { getImageUrl } from '../../utils';
//src={getImageUrl("about/Mic.png")}
const Header = () => {
  return (
    <section className={styles.Clubs} id="Clubs">
        <h2 className={styles.title}>Vie Assosiative</h2>
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={`${styles.face} ${styles.face1}`}>
          <div className={styles.content}>
            <span className={styles.stars}></span>
            <h2 className={styles.Mic}>Microsoft ISIMA Club</h2>
            <p className={styles.Mica}>
              <span className={styles.Mico}>Oct 2019</span> Active member
            </p>
            <p className={styles.Mica}>
            <span className={styles.Mico}>Jan 2020</span> Event planner
            </p>
            <p className={styles.Mica}>
            <span className={styles.Mico}>Jan 2021</span> Event planner
            </p>

            <p className={styles.Mica}>
            <span className={styles.Mico}>Jan 2022</span> Logistics manager
            </p>
            <p className={styles.Mica}>
            <span className={styles.Mico}>Jan 2023</span> Vice-president
            </p>
          </div>
        </div>
        <div className={`${styles.face} ${styles.face2}`}>
          <img
            src={"https://nabeghanane-portfolio.imgix.net/assets/about/Mic.png"}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
        </div>
      </div>

      <div className={styles.card}>
        <div className={`${styles.face} ${styles.face1}`}>
          <div className={styles.content}>
            <span className={styles.stars}></span>
            <h2 className={styles.Mic}>National University Orientation Committee</h2>
            <p className={styles.Mica}>
              <span className={styles.Mico}>June 2020</span> Designer
            </p>
            <p className={styles.Mica}>
            <span className={styles.Mico}>August 2020</span> Orientation coordinator at Nouvelle Medina
            </p>
          </div>
        </div>
        <div className={`${styles.face} ${styles.face2}`}>
        <img
            src={"https://nabeghanane-portfolio.imgix.net/assets/about/Orio.png"}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
        </div>
      </div>

      <div className={styles.card}>
        <div className={`${styles.face} ${styles.face1}`}>
          <div className={styles.content}>
            <span className={styles.stars}></span>
            <h2 className={styles.Mic}>FSEG Night Movie Club</h2>
            <p className={styles.Mica}>
              <span className={styles.Mico}>Oct 2019</span> Media manager
            </p>
            <p className={styles.Mica}>
            <span className={styles.Mico}>Sept 2020</span> President
            </p>
          </div>
        </div>
        <div className={`${styles.face} ${styles.face2}`}>
        <img
            src={"https://nabeghanane-portfolio.imgix.net/assets/about/Fnm.png"}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
        </div>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={`${styles.face} ${styles.face1}`}>
          <div className={styles.content}>
            <span className={styles.stars}></span>
            <h2 className={styles.Mic}>Future Leaders FSEGMa Club</h2>
            <p className={styles.Mica}>
              <span className={styles.Mico}>Jan 2020</span> Media manager
            </p>
            <p className={styles.Mica}>
            <span className={styles.Mico}>Jan 2021</span> Content manager
            </p>
          </div>
        </div>
        <div className={`${styles.face} ${styles.face2}`}>
        <img
            src={"https://nabeghanane-portfolio.imgix.net/assets/about/Fl.png"}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
        </div>
      </div>

      <div className={styles.card}>
        <div className={`${styles.face} ${styles.face1}`}>
          <div className={styles.content}>
            <span className={styles.stars}></span>
            <h2 className={styles.Mic}>MicMinds hackathon</h2>
            <p className={styles.Mica}>
              <span className={styles.Mico}>02-03/12/2023</span> at the APII Business Incubator Of Mahdia
            </p>
            <p className={styles.Mica}>
            <span className={styles.Mico}>By Microsoft ISIMa Club</span> Participant than Winner Price, 1st Place By RabahMe Project
            </p>
          </div>
        </div>
        <div className={`${styles.face} ${styles.face2}`}>
        <img
            src={"https://nabeghanane-portfolio.imgix.net/assets/about/PIP.png"}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
        </div>
      </div>

      <div className={styles.card}>
        <div className={`${styles.face} ${styles.face1}`}>
          <div className={styles.content}>
            <span className={styles.stars}></span>
            <h2 className={styles.Mic}>INJAZ Al Arab</h2>
            <p className={styles.Mica}>
              <span className={styles.Mico}>May 2022</span> Participant as Leader Team than Winner Price, 2nd Place By Leak Evolution Detected 'LED' Project
            </p>
            <p className={styles.Mica}>
            <span className={styles.Mico}>May 2023</span> Participant as Leader Team than Winner Price, 1st Place By Found IT Project
            </p>
          </div>
        </div>
        <div className={`${styles.face} ${styles.face2}`}>
        <img
            src={"https://nabeghanane-portfolio.imgix.net/assets/about/InjazTn.png"}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Header;
