import React, { useState } from 'react';
import '../styles/contactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateField = (name, value) => {
    let errorMessage = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          errorMessage = 'Name is required.';
        } else if (value.trim().length < 3) {
          errorMessage = 'Name must be at least 3 characters long.';
        }
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          errorMessage = 'Email is required.';
        } else if (!emailRegex.test(value)) {
          errorMessage = 'Invalid email format.';
        }
        break;

      case 'message':
        if (!value.trim()) {
          errorMessage = 'Message is required.';
        } else if (value.trim().length < 10) {
          errorMessage = 'Message must be at least 10 characters long.';
        }
        break;

      default:
        break;
    }

    return errorMessage;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate the field on change
    const errorMessage = validateField(name, value);
    setErrors({ ...errors, [name]: errorMessage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const messageError = validateField('message', formData.message);

    if (nameError || emailError || messageError) {
      setErrors({
        name: nameError,
        email: emailError,
        message: messageError,
      });
      return;
    }

    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">
              Feel free to reach out to us using the contact form below. We're here to help!
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i> <span>example@email.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i> <span>(123) 456-7890</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i> <span>123 Main Street, City, Country</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  required
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  required
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  rows="5"
                  required
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>
              <button
                type="submit"
                className="btn-custom"
                disabled={
                  !formData.name || !formData.email || !formData.message || errors.name || errors.email || errors.message
                }
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom-right image */}
      <img
        src="/assets/images/location.png"
        alt="Small Icon"
        className="bottom-right-image"
      />
    </div>
  );
};

export default ContactPage;
