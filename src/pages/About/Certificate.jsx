import React, { useState } from 'react';
import styles from './Certificate.module.css';
import certification from "../../data/certification.json"; // Import the certification JSON

function Certificate() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => setActiveSlide((prevSlide) => (prevSlide < certification.length - 1 ? prevSlide + 1 : 0));

  const prevSlide = () => setActiveSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : certification.length - 1));

  return (
    <section className={styles.Certif} id="Certificate">
      <h2 className={styles.title}>Certifications</h2> 
      <div className={styles.certificate}>
        <div id="carouselExampleIndicators" className={`carousel ${styles.carousel}`} data-ride="carousel">
          <div className={`carousel-inner ${styles.carouselInner}`} role="listbox">
            {certification.map((cert, index) => (
              <div
                key={cert.name}
                className={`carousel-item ${index === activeSlide ? 'active' : ''} ${styles.carouselItem}`}
              >
                <img
                  className={`img-fluid mx-auto ${styles.image}`}
                  src={cert.source} // Use the source from JSON
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <a className={`carousel-control-prev ${styles.carouselControlPrev}`} onClick={prevSlide}>
            <span className={`carousel-control-prev-icon ${styles.carouselControlPrevIcon}`} aria-hidden="true"></span>
            <span className={`sr-only ${styles.srOnly}`}>Previous</span>
          </a>
          <a className={`carousel-control-next ${styles.carouselControlNext}`} onClick={nextSlide}>
            <span className={`carousel-control-next-icon ${styles.carouselControlNextIcon}`} aria-hidden="true"></span>
            <span className={`sr-only ${styles.srOnly}`}>Next</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certificate;
