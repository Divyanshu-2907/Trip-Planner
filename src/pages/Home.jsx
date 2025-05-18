import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import background from "../assets/background.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <img src={background} alt="Hero Background" className="hero-img" />
        <div className="hero-overlay">
          <h1 className="hero-title">Let's Explore The World with Us</h1>
          <p className="hero-description">
            Discover breathtaking destinations and create unforgettable memories.
          </p>
          <button className="learn-more" onClick={() => navigate("/destinations")}>
            Learn More
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="content">
        <h2 className="section-title">Discover Our Top Picks</h2>
        <p className="section-description">
          Explore the most beautiful destinations that offer adventure, relaxation, and luxury.
        </p>
        <div className="image-grid">
          <img src={img1} alt="Scenic 1" className="grid-image" />
          <img src={img2} alt="Scenic 2" className="grid-image" />
          <img src={img3} alt="Scenic 3" className="grid-image" />
        </div>
      </section>
    </div>
  );
}

export default Home;
