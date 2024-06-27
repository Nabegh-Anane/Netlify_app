import React, { useState } from 'react';
import styles from './Certificate.module.css';
import { getImageUrl } from '../../utils';

function Certificate() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => setActiveSlide((prevSlide) => (prevSlide < 3 ? prevSlide + 1 : 0));

  const prevSlide = () => setActiveSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 3));

  return (
    <section className={styles.Certif} id="Certificate">
        <h2 className={styles.title}>Certifications</h2> 
    <div className={styles.certificate}>
      <div id="carouselExampleIndicators" className={`carousel ${styles.carousel}`} data-ride="carousel">
        

        <div className={`carousel-inner ${styles.carouselInner}`} role="listbox">
          {['Java', 'Autodesk', 'PythonBasics', 'Ads'].map((certificate, index) => (
            <div
              key={certificate}
              className={`carousel-item ${index === activeSlide ? 'active' : ''} ${styles.carouselItem}`}
            >
              
              <img
                className={`img-fluid mx-auto ${styles.image}`}
                src={getImageUrl(`certif/${certificate}.png`)}
                alt={`Slide ${index + 1}`}
              />
              
            </div>
          ))}
        </div>

        <a  className={`carousel-control-prev ${styles.carouselControlPrev}`} onClick={prevSlide}>
          <span className={`carousel-control-prev-icon ${styles.carouselControlPrevIcon}`} aria-hidden="true"></span>
          <span className={`sr-only ${styles.srOnly}`}>Previous</span>
        </a>
        <a  className={`carousel-control-next ${styles.carouselControlNext}`} onClick={nextSlide}>
          <span className={`carousel-control-next-icon ${styles.carouselControlNextIcon}`} aria-hidden="true"></span>
          <span className={`sr-only ${styles.srOnly}`}>Next</span>
        </a>
      </div>
    </div>
    </section>
  );
}

export default Certificate;
