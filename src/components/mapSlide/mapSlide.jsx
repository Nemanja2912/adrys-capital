import { useEffect, useState } from "react";
import styles from "./mapSlide.module.css";

const MapSlide = ({ slideRef, title, text, image, element }) => {
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
    <div id="mapSlide" ref={slideRef} className={styles.slide} style={{ top: stickyTop }}>
      <div className={styles.slideContent}>
        <div className={styles.imageWrapper}>
          <img src={image} alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.text}>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default MapSlide;
