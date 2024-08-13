import styles from "./mapSlide.module.css";

const MapSlide = ({ slideRef, title, text, image }) => {
  return (
    <div ref={slideRef} className={styles.slide}>
      <div className={styles.imageWrapper}>
        <img src={image} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default MapSlide;
