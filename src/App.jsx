import { useEffect, useRef, useState } from "react";
import "./style/general.css";
import Slide from "./components/slide/slide";
import { content } from "./assets/content/content";
import MapSlide from "./components/mapSlide/mapSlide";

function App() {
  const slidesRef = useRef([]);

  const checkBreakValue = (value, breakValue) => {
    return value > breakValue ? breakValue : value;
  };

  useEffect(() => {
    const slides = slidesRef.current;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      if (windowWidth < 600) return;

      const setSlideHeight = (item) => {
        const slideBreakHeight = item.getBoundingClientRect().top - windowHeight * 0.05;
        const slideHeight = -(slideBreakHeight / windowHeight) * 70;
        const borderRadius = 50 * (slideBreakHeight / (windowHeight * 0.3));

        item.style.transform = `translate(${checkBreakValue(slideHeight, 0)}vw,0)`;

        const maxBorder = checkBreakValue(borderRadius, 50);

        item.style.borderTopRightRadius = `${maxBorder < 0 ? 0 : maxBorder}px`;
      };

      slides.forEach((item) => setSlideHeight(item));
    };

    const handleScrollThrottled = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollThrottled);

    return () => window.removeEventListener("scroll", handleScrollThrottled);
  }, []);

  return (
    <div className="body">
      {content.map((item, index) =>
        index === 1 ? (
          <MapSlide
            key={index}
            slideRef={(el) => (slidesRef.current[index] = el)}
            title={item.title}
            text={item.text}
            image={item.image}
          />
        ) : (
          <Slide
            key={index}
            slideRef={(el) => (slidesRef.current[index] = el)}
            title={item.title}
            text={item.text}
            image={item.image}
            video={item.video}
          />
        )
      )}
    </div>
  );
}

export default App;
