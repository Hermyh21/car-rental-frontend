import React from 'react';
import '../styles/ServicesPage.css'; // Custom CSS for layout

const ServicesPage = () => {
  return (
    <div className="services-page text-center py-5 px-5">
      <h1 className='fw-bold'>Our Services</h1>
      <div className="pt-5 row justify-content-center">
        <div className="col-12 col-md-4 mb-4">
          <div className="service-item">
            <div className="service-icon">
              <i className="fas fa-taxi"></i>
            </div>
            <h3>Airport Transfers</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <div className="service-item">
            <div className="service-icon">
              <i className="fas fa-calendar-check"></i>
            </div>
            <h3>Scheduled Rides</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
