import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  const [hovered, setHovered] = useState(null); // State to track hovered card

  return (
    <>
      
      
          <h1 className="display-4 fw-bold text-center">About Shopify</h1>
          <p className="lead text-center">
            Redefining style, technology, and sophistication for the modern world. Welcome to the Shopify family.
          </p>
       

      {/* About Us Section */}
      <section className="about-us-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Our Journey</h2>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center mb-4">
              <p>
                Shopify was born from a desire to merge fashion, technology, and home aesthetics into one seamless experience. Our mission is to deliver a curated collection of products that inspire confidence and creativity while embracing the latest innovations and trends.
              </p>
              <p>
                From chic apparel to cutting-edge gadgets, we pride ourselves on delivering quality and value to our customers. Every product in our collection is chosen with care, reflecting our commitment to excellence and style.
              </p>
              <p>
                Thank you for making TrendAura your go-to destination for all things trendy. Together, let’s shape the future of lifestyle and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision and Mission */}
      <section className="vision-mission-section py-5 px-2 bg-light rounded-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className="fw-bold">Our Vision</h3>
              <p>
                To be the leading global destination for trendsetters, innovators, and style enthusiasts, redefining the boundaries of fashion and technology.
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold">Our Mission</h3>
              <p>
                To empower individuals by providing access to high-quality, stylish, and innovative products that enhance their everyday lives and inspire creativity.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="cta-section py-5 text-center">
        <div className="container">
          <h3 className="fw-bold mb-3">Join the Shopify Family</h3>
          <p className="lead mb-4">
            Stay up to date with the latest trends. Shop now and experience the best in fashion, electronics, and more!
          </p>
          <NavLink to="/shop" className="btn btn-primary btn-lg">
            Shop Now
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default About;