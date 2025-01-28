//Code éditer par Johan
import { useState } from "react"; //useState pour la gestion des états
/* eslint-disable react/prop-types */

const Slider = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button onClick={prevSlide} className="slider-btn prev-btn">
        &#8249;
      </button>
      <img
        src={images[currentIndex]}
        alt={`${alt} - Slide ${currentIndex + 1}`}
        className="slider-image"
      />
      <button onClick={nextSlide} className="slider-btn next-btn">
        &#8250;
      </button>
    </div>
  );
};

export default Slider;
