import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/galleryPage.css';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  // Group images for multi-item slides
  const images = [
    [image1, image2, image3], // First slide
    [image4, image5, image1], // Second slide
    [image2, image3, image4], // Third slide
  ];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
       <div className="d-flex justify-content-center mb-5 mt-4">
        <h1 className="fw-bold">Gallery</h1>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        {images.map((group, i) => (
          <Carousel.Item key={i}>
            <div className="multi-image-slide">
              {group.map((src, j) => (
                <img
                  key={j}
                  src={src}
                  alt={`Slide ${i + 1} Image ${j + 1}`}
                  className="multi-image"
                />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      
    </div>
  );
}

export default ControlledCarousel;
