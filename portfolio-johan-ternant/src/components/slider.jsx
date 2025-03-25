//Code éditer par Johan
//Contient le "Slider" des "Projets"
import { useState } from "react"; //useState pour la gestion des états
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
/* eslint-disable react/prop-types */

const Slider = ({ images }) => {
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
      <button
        onClick={prevSlide}
        className="slider-btn prev-btn"
        aria-label="Previous slide"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <img
        src={images[currentIndex].src} //Accède à src dans l'objet image
        alt={images[currentIndex].alt} //Accède à alt dans l'objet image
        className="slider-image"
        width="1263"
        height="607"
      />
      <button
        onClick={nextSlide}
        className="slider-btn next-btn"
        aria-label="Next slide"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Slider;
