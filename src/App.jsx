import React from "react";
import LandingPage from "./components/landingPage";
import ControlledCarousel from "./components/galleryPage";
import ContactPage from "./components/contactPage";
import ServicesPage from "./components/servicesPage";
import MakeAppointment from "./components/makeAppointments";
import Testimonial from "./components/testimonial";
import BusinessHours from "./components/businessHours";
import Blog from "./components/blog";
import QRCodePage from "./components/QRCodePage";
import CreateVCardPage from "./components/createVCardPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProductsPage from "./components/products";
function App() {
  return (
    <>
      <LandingPage />
      <ContactPage />
      <ControlledCarousel />
      
      <ServicesPage />
      
      <div className="bg-dark text-light" style={{ minHeight: "100vh", padding: "20px" }}>
        <MakeAppointment />
        <ProductsPage/>
        <Testimonial />
        <BusinessHours />
        <Blog />
      </div>
      <div className="bg-dark text-light" style={{ minHeight: "100vh", padding: "20px" }}>
        <QRCodePage />
        <CreateVCardPage />
      </div>
    </>
  );
}

export default App;
