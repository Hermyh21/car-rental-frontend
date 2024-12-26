import React, { useState } from 'react';
import transp1 from '../assets/images/transp1.jpg';
import transp2 from '../assets/images/transp2.jpg';
import transp3 from '../assets/images/transp3.jpg';
import '../styles/blog.css';

const Blog = () => {
  const blogs = [
    {
      title: 'Exploring Eco-Friendly Transportation',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: transp1,
    },
    {
      title: 'The Future of Smart Cities',
      description:
        'Discover how technology is reshaping urban living for sustainability and efficiency.',
      image: transp2,
    },
    {
      title: 'Green Innovations in Urban Design',
      description: 'Unveiling sustainable design solutions for the future.',
      image: transp3,
    },
    {
      title: 'Tech Trends for a Greener Tomorrow',
      description: 'Exploring how technology can drive environmental change.',
      image: transp2,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % blogs.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  return (
    <div className="container mt-5 mt-9">
      <h1 className="text-white text-center mb-7">Blog</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="blog-slider position-relative">
            <div
              className="blog-slider-inner d-flex"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {blogs.map((blog, index) => (
                <div
                  className="card bg-dark text-light flex-shrink-0"
                  style={{ width: '100%' }}
                  key={index}
                >
                  <img
                    src={blog.image}
                    className="card-img-top"
                    alt={blog.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="btn btn-light position-absolute start-0 top-50 translate-middle-y"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <button
              className="btn btn-light position-absolute end-0 top-50 translate-middle-y"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
