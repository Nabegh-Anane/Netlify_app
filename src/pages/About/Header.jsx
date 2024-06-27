import React from 'react';
import styles from './Header.module.css';
import { getImageUrl } from '../../utils';

const Header = () => {
  return (
    <section className={styles.Clubs} id="Clubs">
        <h2 className={styles.title}>Vie Assosiative</h2>
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={`${styles.face} ${styles.face1}`}>
          <div className={styles.content}>
            <span className={styles.stars}></span>
            <h2 className={styles.Mic}>Microsoft Isima</h2>
            <p className={styles.Mica}>
              <span className={styles.Mico}>2019</span> Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
            </p>
            <p className={styles.Mica}>
            <span className={styles.Mico}>2022</span> Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
            </p>
          </div>
        </div>
        <div className={`${styles.face} ${styles.face2}`}>
          <img
            src={getImageUrl("about/Mic.png")}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
        </div>
      </div>

      <div className={styles.card}>
        <div className={`${styles.face} ${styles.face1}`}>
          <div className={styles.content}>
            <span className={styles.stars}></span>
            <h2 className={styles.Mic}>Microsoft Isima</h2>
            <p className={styles.Mica}>
              <span className={styles.Mico}>2019</span> Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
            </p>
            <p className={styles.Mica}>
            <span className={styles.Mico}>2022</span> Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
            </p>
          </div>
        </div>
        <div className={`${styles.face} ${styles.face2}`}>
        <img
            src={getImageUrl("about/Orio.png")}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
        </div>
      </div>

      <div className={styles.card}>
        <div className={`${styles.face} ${styles.face1}`}>
          <div className={styles.content}>
            <span className={styles.stars}></span>
            <h2 className={styles.Mic}>Microsoft Isima</h2>
            <p className={styles.Mica}>
              <span className={styles.Mico}>2019</span> Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
            </p>
            <p className={styles.Mica}>
            <span className={styles.Mico}>2022</span> Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
            </p>
          </div>
        </div>
        <div className={`${styles.face} ${styles.face2}`}>
        <img
            src={getImageUrl("about/Fnm.png")}
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
            <h2 className={styles.Mic}>Microsoft Isima</h2>
            <p className={styles.Mica}>
              <span className={styles.Mico}>2019</span> Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
            </p>
            <p className={styles.Mica}>
            <span className={styles.Mico}>2022</span> Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
            </p>
          </div>
        </div>
        <div className={`${styles.face} ${styles.face2}`}>
        <img
            src={getImageUrl("about/Fl.png")}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
        </div>
      </div>

      <div className={styles.card}>
        <div className={`${styles.face} ${styles.face1}`}>
          <div className={styles.content}>
            <span className={styles.stars}></span>
            <h2 className={styles.Mic}>Microsoft Isima</h2>
            <p className={styles.Mica}>
              <span className={styles.Mico}>2019</span> Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
            </p>
            <p className={styles.Mica}>
            <span className={styles.Mico}>2022</span> Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
            </p>
          </div>
        </div>
        <div className={`${styles.face} ${styles.face2}`}>
        <img
            src={getImageUrl("about/Enactus.png")}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
        </div>
      </div>

      <div className={styles.card}>
        <div className={`${styles.face} ${styles.face1}`}>
          <div className={styles.content}>
            <span className={styles.stars}></span>
            <h2 className={styles.Mic}>Microsoft Isima</h2>
            <p className={styles.Mica}>
              <span className={styles.Mico}>2019</span> Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
            </p>
            <p className={styles.Mica}>
            <span className={styles.Mico}>2022</span> Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
            </p>
          </div>
        </div>
        <div className={`${styles.face} ${styles.face2}`}>
        <img
            src={getImageUrl("about/Ca.png")}
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
