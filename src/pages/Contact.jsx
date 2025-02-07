import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ContactUs = () => {
  // State to handle form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setIsSubmitted(true); // Show confirmation message
    setFormData({ name: "", email: "", message: "" }); // Reset the form
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
    
    
          <h1 className="display-4 fw-bold text-center">Contact Shopify</h1>
          <p className="lead text-center">
            Have questions or feedback? Reach out to us, and let’s connect!
          </p>
      

      {/* Contact Form Section */}
      <section className="contact-form-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">We’d Love to Hear from You</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control rounded-pill px-3"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control rounded-pill px-3"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control rounded-3 px-3"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg rounded-pill"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              {isSubmitted && (
                <div className="alert alert-success mt-4" role="alert">
                  Thank you for reaching out! We’ll respond to you soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section py-5 bg-light rounded-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Our Contact Information</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4 text-center">
              <h5>Email</h5>
              <p>shopify@gmail.com</p>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <h5>Phone</h5>
              <p>9988998899</p>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <h5>Address</h5>
              <p>125-700 Shopify Madhapur Hyderabad</p>
            </div>
          </div>
        </div>
      </section>

    

      {/* Social Media Section */}
      <section className="social-media-section py-5 text-center">
        <div className="container">
          <h3 className="fw-bold mb-3">Connect with Us</h3>
          <div className="d-flex justify-content-center">
            <a
              href="https://facebook.com"
              className="text-dark me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-dark me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              href="https://instagram.com"
              className="text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram" style={{ fontSize: "2rem" }}></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;