import { useEffect, useState } from "react";
import LogoWrapper from "../logo/logoWrapper";
import styles from "./slide.module.css";

const Slide = ({ slideRef, title, text, image = false, video = false }) => {
  // const [minHeight, setMinHeight] = useState(0);

  // useEffect(() => {
  //   const handleMinHeight = () => {
  //     setMinHeight(window.innerHeight);
  //   };

  //   setTimeout(() => {
  //     handleMinHeight();
  //   }, 500);
  // }, []);

  return (
    <div
      ref={slideRef}
      className={`${styles.slide}`}
      style={{ backgroundImage: `url(${image})`, minHeight: minHeight === 0 ? "100vh" : minHeight }}
    >
      {video ? (
        <div className={styles.videoWrapper}>
          <video autoPlay muted playsInline loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      ) : (
        ""
      )}
      {video ? <LogoWrapper /> : ""}
      <div className={styles.backgroundWrapper}></div>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default Slide;
