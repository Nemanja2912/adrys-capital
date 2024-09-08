import { useEffect, useState } from "react";
import styles from "./mapSlide.module.css";
import Flag from "../../assets/images/flag.png";

const MapSlide = ({ slideRef, title, text, label, flag, image }) => {
  const [stickyTop, setStickyTop] = useState(0);
  useEffect(() => {
    const getCalculation = () => {
      return (
        window.innerHeight - document.querySelector("#mapSlide").getBoundingClientRect().height
      );
    };

    const handleSticky = () => {
      setStickyTop(getCalculation());
    };

    window.addEventListener("resize", handleSticky);

    setTimeout(() => {
      handleSticky();
    }, 500);

    return () => window.removeEventListener("resize", handleSticky);
  }, []);

  return (
    <div id="mapSlide" ref={slideRef} className={`${styles.slide}`} style={{ top: stickyTop }}>
      <div className={styles.slideContent}>
        <div className={styles.imageWrapper}>
          <img src={image} alt="" />
        </div>
        <div className={`${styles.content} animation`}>
          <div className={styles.text}>{label}</div>
          {flag && (
            <div className={styles.flagWrapper}>
              <img src={Flag} alt="" />
              <p className={styles.text}>MiFID II complaint</p>
            </div>
          )}
          <div className={styles.title}>{title}</div>
          <div className={styles.text}>{text}</div>

          {!flag && (
            <>
              <br />
              <br />
              <br />
              <div>
                <a href="#" target="_blank" className={styles.text}>
                  Contact us
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapSlide;
