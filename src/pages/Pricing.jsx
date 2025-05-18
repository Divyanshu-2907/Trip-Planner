import React from "react";
import "./Pricing.css";
import { FaPaperPlane } from "react-icons/fa"; // Importing the icon
import { useNavigate, useSearchParams } from 'react-router-dom';

const PricingPlan = () => {
  const navigate = useNavigate();
  const handleCardClick = (plan) => {
    navigate(`/payment-gateway/${plan}`);
  };
  return (
    <section className="pricing">
      <h2 className="title">Choose the Perfect Plan</h2>
      <p className="description">
        Select a plan that best fits your needs. Whether you're just starting out or need premium features, 
        we have an option for you. Get the best value for your investment.
      </p>
      <div className="pricing-cards">
        {/* Basic Plan */}
        <div className="card">
          <div className="icon-box">
            <FaPaperPlane className="icon" />
          </div>
          <h3 className="plan-title">Basic Plan</h3>
          <p className="plan-desc">
            Ideal for individuals or startups looking for essential features to get started. 
            Get access to fundamental tools and seamless experience.
          </p>
          <p className="price">$100</p>
          <button className="booking-btn" onClick={() => handleCardClick('Basic')}>
            Get Started
          </button>
        </div>

        {/* Best Value (Highlighted) */}
        <div className="card best-value">
          <div className="icon-box">
            <FaPaperPlane className="icon" />
          </div>
          <h3 className="plan-title">Best Value</h3>
          <p className="plan-desc">
            Our most popular plan! Perfect for growing businesses that need advanced tools, 
            premium support, and optimized performance.
          </p>
          <p className="price">$150</p>
          <button className="booking-btn" onClick={() => handleCardClick('Best Value')}>
            Choose Plan
          </button>
        </div>

        {/* Exclusive Plan */}
        <div className="card">
          <div className="icon-box">
            <FaPaperPlane className="icon" />
          </div>
          <h3 className="plan-title">Exclusive</h3>
          <p className="plan-desc">
            Designed for enterprises and professionals who need top-tier features, 
            priority support, and the best performance possible.
          </p>
          <p className="price">$250</p>
          <button className="booking-btn" onClick={() => handleCardClick('Exclusive')}>
            Get Premium
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
