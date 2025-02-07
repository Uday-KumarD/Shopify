import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
 
const Home = () => {
  

  // Testimonials data
  const reviews = [
    {
      text: '"TrendAura has the best collection of outfits. I love their quality and customer service!"',
      author: "Jane Doe",
    },
    {
      text: '"Amazing gadgets at great prices! Highly recommended."',
      author: "John Smith",
    },
    {
      text: '"The home decor items are simply beautiful! They really bring style and comfort to my home."',
      author: "Mary Johnson",
    },
    {
      text: '"I bought a gift for my wife, and she absolutely loved it! Great quality jewelry!"',
      author: "Robert Brown",
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [topPicks, setTopPicks] = useState([]);
  const [currentTopPickIndex, setCurrentTopPickIndex] = useState(0);

  

  // Fetch top picks from FakeStoreAPI
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setTopPicks(data); // Store fetched products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Update testimonial review every 2 seconds
  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 2000);
    return () => clearInterval(reviewInterval);
  }, [reviews.length]);

  // Cycle through top picks every 2 seconds
  useEffect(() => {
    const topPickInterval = setInterval(() => {
      setCurrentTopPickIndex((prevIndex) => (prevIndex + 5) % topPicks.length);
    }, 2000);
    return () => clearInterval(topPickInterval);
  }, [topPicks.length]);

  const visibleTopPicks = topPicks.slice(
    currentTopPickIndex,
    currentTopPickIndex + 5
  );

  return (
    <>
      {/* Hero Section */}

          <h1 className="display-4 fw-bold">Welcome to Shopify</h1>
          <p className="lead">
            Discover the latest trends in fashion, electronics, and home decor.
            Shop with confidence and style!
          </p>
          <NavLink to="/shop" className="btn btn-primary btn-lg mt-3">
            Explore Now
          </NavLink>
   

      {/* Featured Categories */}
      <section className="categories-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Our Featured Categories</h2>
          <div className="row justify-content-center">
            <div
              className="col-md-4 col-sm-6 mb-4"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div
                className="card shadow h-100 category-card"
                style={{
                  overflow: "hidden",
                  borderRadius: "15px",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <img
                  src="./src/assets/fashion.jpg"
                  className="card-img-top"
                  alt="Fashion"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Fashion</h5>
                  <p className="card-text">
                    Explore trendy outfits and accessories.
                  </p>
                  <NavLink to="/shop" className="btn btn-outline-primary">
                    Shop Now
                  </NavLink>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 mb-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div
                className="card shadow h-100 category-card"
                style={{
                  overflow: "hidden",
                  borderRadius: "15px",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <img
                  src="./src/assets/electronics.jpg"
                  className="card-img-top"
                  alt="Electronics"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Electronics</h5>
                  <p className="card-text">
                    Discover the latest gadgets and devices.
                  </p>
                  <NavLink to="/shop" className="btn btn-outline-primary">
                    Shop Now
                  </NavLink>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 mb-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div
                className="card shadow h-100 category-card"
                style={{
                  overflow: "hidden",
                  borderRadius: "15px",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <img
                  src="./src/assets/jew.jpg"
                  className="card-img-top"
                  alt="Jewellery"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Jewellery</h5>
                  <p className="card-text">
                    Find beautiful Jewellery for someone special.
                  </p>
                  <NavLink to="/shop" className="btn btn-outline-primary">
                    Shop Now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-5 bg-secondary-subtle">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Top Picks for You</h2>
          <div
            className="d-flex justify-content-center gap-4"
            data-aos="fade-right"
          >
            {visibleTopPicks.map((product) => (
              <div
                key={product.id}
                className="card shadow bg-dark-subtle"
                style={{
                  width: "200px",
                  borderRadius: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div
                  className="card-body d-flex flex-column justify-content-between"
                  style={{ height: "200px" }}
                >
                  <div>
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                  </div>
                  <div className="d-flex justify-content-center mt-auto">
                    <button className="btn btn-outline-success btn-sm">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5">
  <div className="container">
    <h2 className="text-center fw-bold mb-5">Why Choose Us?</h2>
    <div className="row">
      
      {/* Customer Satisfaction */}
      <div className="col-md-3 my-2 text-center" data-aos="fade-up" data-aos-delay="200">
        <h5>Customer Satisfaction</h5>
        <p>We prioritize your happiness and satisfaction.</p>
      </div>
      {/* Secure Payments */}
      <div className="col-md-3 my-2 text-center" data-aos="fade-up" data-aos-delay="400">
        <h5>Secure Payments</h5>
        <p>Safe and reliable payment options available.</p>
      </div>
      {/* 24/7 Support */}
      <div className="col-md-3 my-2 text-center" data-aos="fade-up" data-aos-delay="600">
        <h5>24/7 Support</h5>
        <p>Assistance whenever you need it.</p>
      </div>
      {/* Quality Products */}
      <div className="col-md-3 my-2 text-center" data-aos="fade-up" data-aos-delay="800">
        <h5>Quality Products</h5>
        <p>Only the best products for our customers.</p>
      </div>
      
      {/* Eco-Friendly */}
      <div className="col-md-3 my-2 text-center" data-aos="fade-up" data-aos-delay="1200">
        <h5>Eco-Friendly</h5>
        <p>Committed to sustainable practices.</p>
      </div>
      {/* Global Reach */}
      <div className="col-md-3 my-2 text-center" data-aos="fade-up" data-aos-delay="1400">
        <h5>Global Reach</h5>
        <p>Serving customers worldwide.</p>
      </div>
    </div>
  </div>
</section>





    </>
  );
};

export default Home;