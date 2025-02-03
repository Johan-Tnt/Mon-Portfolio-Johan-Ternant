//Code éditer par Johan
import { useState } from "react"; //useState pour la gestion des états
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <img
        src={images[currentIndex]}
        alt={`${alt} - Slide ${currentIndex + 1}`}
        className="slider-image"
      />
      <button onClick={nextSlide} className="slider-btn next-btn">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Slider;
