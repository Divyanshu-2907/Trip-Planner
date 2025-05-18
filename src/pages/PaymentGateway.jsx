import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PaymentGateway.css';

const PaymentGateway = () => {
  const navigate = useNavigate();
  const { plan } = useParams();
  const prices = {
    Basic: '$100',
    'Best Value': '$150',
    Exclusive: '$250'
  };
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  // Handle special case for 'Best Value' since it has a space
  const formattedPlan = plan === 'Best%20Value' ? 'Best Value' : plan;

  const handlePayment = () => {
    // Simulate payment processing
    setIsPaymentSuccessful(true);
    // In a real application, you would:
    // 1. Make an API call to your payment processor
    // 2. Wait for the response
    // 3. Update the state based on the response
    // 4. Show appropriate message based on success/failure

    // Automatically redirect to home after 3 seconds
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 3000);
  };

  if (isPaymentSuccessful) {
    return (
      <div className="payment-container">
        <div className="payment-card success">
          <h2>Payment Successful!</h2>
          <div className="success-message">
            <p>Thank you for your payment!</p>
            <p>Your {formattedPlan} plan has been activated.</p>
            <p className="price">Amount Paid: {prices[formattedPlan]}</p>
          </div>
          <button className="back-button" onClick={() => navigate('/', { replace: true })}>
            Go to Home
          </button>
        </div>
      </div>
    );
  }


  if (isPaymentSuccessful) {
    // Automatically redirect to home after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);

    return (
      <div className="payment-container">
        <div className="payment-card success">
          <h2>Payment Successful!</h2>
          <div className="success-message">
            <p>Thank you for your payment!</p>
            <p>Your {formattedPlan} plan has been activated.</p>
            <p className="price">Amount Paid: {prices[formattedPlan]}</p>
          </div>
          <button className="back-button" onClick={() => navigate('/')}>
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2>Payment Gateway</h2>
        <div className="payment-details">
          <div className="plan-info">
            <h3>Selected Plan</h3>
            <p>{formattedPlan}</p>
            <p className="price">{prices[formattedPlan]}</p>
          </div>
          <div className="payment-form">
            <h3>Payment Information</h3>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input type="text" id="expiryDate" placeholder="MM/YY" />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" placeholder="123" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name on Card</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
          </div>
        </div>
        <button className="pay-button" onClick={handlePayment}>
          Pay Now
        </button>
        {isPaymentSuccessful && (
          <div className="success-overlay">
            <div className="success-message">
              <h3>Payment Successful!</h3>
              <p>Redirecting you to the home page...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentGateway;
