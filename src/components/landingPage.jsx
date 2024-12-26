import React from "react";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6">
            <h1 className="name">Jeff Murray</h1>
            <p className="service">Taxi Service</p>
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-whatsapp"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6 text-center">
            <div className="profile-wrapper">
              <img
                src="/profile.jpg"
                alt="Jeff Murray"
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
