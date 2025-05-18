import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "./Destinations.css";
import img1 from "../assets/destination1.png";
import img2 from "../assets/destination2.png";
import img3 from "../assets/destination3.png";

const destinations = [
  { id: 1, img: img1, name: "Tropical Paradise", alt: "Beach and palm trees" },
  { id: 2, img: img2, name: "Mountain Escape", alt: "Snowy mountain landscape" },
  { id: 3, img: img3, name: "Urban Adventure", alt: "City skyline at night" }
];

const Destinations = () => {
  const navigate = useNavigate(); // React Router hook

  return (
    <section className="destinations">
      <h2 className="title">Explore Our Top Destinations</h2>
      <p className="description">
        Experience breathtaking locations tailored to your travel desires. Whether you're looking for a relaxing getaway, a thrilling adventure, or an urban exploration, we have the perfect destination for you.
      </p>
      <div className="destinations-grid">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="destination-card"
            onClick={() => navigate("/pricing")}
          >
            <img src={destination.img} alt={destination.alt} />
            <div className="overlay">
              <h3 className="destination-name">{destination.name}</h3>
              <p className="click-to-view">Click to View Pricing</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
