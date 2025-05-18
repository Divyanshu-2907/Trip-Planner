import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Pricing from "./pages/Pricing";
import PaymentGateway from "./pages/PaymentGateway";

function App() {
  console.log("App is rendering..."); // Debugging log

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/payment-gateway/:plan" element={<PaymentGateway />} />
      </Routes>
    </>
  );
}

export default App;
