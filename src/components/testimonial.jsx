import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import test1 from '../assets/images/test1.jpg';
import test2 from '../assets/images/test2.jpg';
import test3 from '../assets/images/test3.jpg';
import test4 from '../assets/images/test4.jpg';
const testimonials = [
  {
    quote: "This product has significantly improved our workflow.",
    name: "Hermonn",
    title: "CEO, Company A",
    image: test1,
  },
  {
    quote: "Excellent customer service and user-friendly interface.",
    name: "Jane Smith",
    title: "CTO, Company B",
    image: test4,
  },
  {
    quote: "This product has significantly improved our workflow.",
    name: "John Linn",
    title: "CEO, Company A",
    image: test3,
  },
  {
    quote: "This product has significantly improved our workflow.",
    name: "Lizz G",
    title: "CEO, Company A",
    image: test2,
  },
];

const TestimonialCarousel = () => (
  <div className="container mt-5">
    <h1 className="text-center mb-4">Testimonials</h1>
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={5000}
    >
      {testimonials.map((testimonial, index) => (
        <div key={index} className="text-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="rounded-circle mx-auto"
            style={{ width: '250px', height: '250px' }}
          />
          <p className="mt-4 fst-italic">"{testimonial.quote}"</p>
          <p className="font-weight-bold mb-0">{testimonial.name}</p>
          <p className="text-muted">{testimonial.title}</p>
        </div>
      ))}
    </Carousel>
  </div>
);

export default TestimonialCarousel;
