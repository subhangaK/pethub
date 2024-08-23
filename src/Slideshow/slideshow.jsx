import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Make sure this CSS file contains the styles

// Import images
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      showSlides(1);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer); // Clean up interval on component unmount
  }, [slideIndex]);

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    const totalSlides = slides.length;
    let newIndex = (slideIndex + n + totalSlides) % totalSlides;
    setSlideIndex(newIndex);
  };

  useEffect(() => {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";
  }, [slideIndex]);

  return (
    <section className="slideshow-container">
      <div className="mySlides fade">
        <img src={img1} alt="Slide 1" />
      </div>
      <div className="mySlides fade">
        <img src={img2} alt="Slide 2" />
      </div>
      <div className="mySlides fade">
        <img src={img3} alt="Slide 3" />
      </div>
      <div className="mySlides fade">
        <img src={img4} alt="Slide 4" />
      </div>
      {/* Navigation Arrows */}
      <a className="prev" onClick={() => showSlides(-1)}>&#10094;</a>
      <a className="next" onClick={() => showSlides(1)}>&#10095;</a>
      {/* Indicators */}
      <div className="dot-container">
        <span className={`dot ${slideIndex === 0 ? 'active' : ''}`}></span>
        <span className={`dot ${slideIndex === 1 ? 'active' : ''}`}></span>
        <span className={`dot ${slideIndex === 2 ? 'active' : ''}`}></span>
        <span className={`dot ${slideIndex === 3 ? 'active' : ''}`}></span>
      </div>
    </section>
  );
};

export default Slideshow;
