import { createFactory, useEffect, useState } from "react";
import LogoWrapper from "../logo/logoWrapper";
import styles from "./slide.module.css";

const Slide = ({ slideRef, data, index }) => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (!data.video) return;

    const handleAnimation = () => {
      setAnimation(true);
    };

    if (document.readyState === "complete") {
      setTimeout(() => {
        handleAnimation();
      }, 100);
    } else {
      window.addEventListener("load", handleAnimation);
    }

    return () => {
      window.removeEventListener("load", handleAnimation);
    };
  }, []);

  return (
    <>
      {index === 0 ? (
        <HeroSection
          video={data?.video}
          title={data?.title}
          text={data?.text}
          animation={animation}
          slideRef={slideRef}
        />
      ) : index === 2 ? (
        <ServeSection
          image={data?.image}
          content={data?.content}
          animation={animation}
          slideRef={slideRef}
          label={data?.label}
        />
      ) : index === 3 ? (
        <AteliersSection
          image={data?.image}
          content={data?.content}
          animation={animation}
          slideRef={slideRef}
          label={data?.label}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Slide;

const HeroSection = ({ video, title, text, animation, slideRef }) => {
  if (!video) return <></>;

  return (
    <div ref={slideRef} className={`${styles.slide}`}>
      <div className={styles.videoWrapper}>
        <video autoPlay muted playsInline loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <LogoWrapper />
      <div className={styles.backgroundWrapper}></div>
      <div className={`${styles.contentWrapper} animation ${animation ? "show-animation" : ""}`}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

const ServeSection = ({ image, content, animation, slideRef, label }) => {
  return (
    <div ref={slideRef} className={`${styles.slide}`} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.backgroundWrapper}></div>
      <div className={`${styles.contentWrapper} animation ${animation ? "show-animation" : ""}`}>
        <div className={styles.text}>{label}</div>
        {content.map((item) => (
          <div className={styles.card}>
            <div className={styles.cardTitle}>{item.title}</div>
            <div className={styles.cardText}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AteliersSection = ({ image, content, animation, slideRef, label }) => {
  return (
    <div
      ref={slideRef}
      className={`${styles.slide} ${styles.slideAtl}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={`${styles.contentWrapper} animation ${animation ? "show-animation" : ""}`}>
        <div className={styles.text}>{label}</div>
        {content.map((item) => (
          <div className={styles.list}>
            <div className={styles.cardTitle}>{item.title}</div>
            <div className={styles.cardText}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
