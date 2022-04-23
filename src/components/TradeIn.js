import React, { useState } from "react";
import TradeInCard from "./TradeInCard";
function TradeIn({ allDevices, devices, step, handler }) {
  //State
  const [userDevices, setUserDevices] = useState(devices);

  // Handler Functions
  const getTradeOpt = (tradeDeviceDetails) => {
    
  };
  // JSX
  return (
    <div className="section-4">
      <div className="step-title">
        <h1>Trade In Options</h1>
      </div>
      <div className="container trade-in-container">
        {userDevices.map((device, i) => (
          <TradeInCard device={device} key={i} allDevices={allDevices} />
        ))}
      </div>
      <div className="section-nav section-4-nav">
        <button
          onClick={() => handler(userDevices, step - 1)}
          className="btn nav-btn"
        >
          Previous: Device Specification
        </button>
        <button
          onClick={() => handler(userDevices, step + 1)}
          className="btn nav-btn"
        >
          Next: Contact Details
        </button>
      </div>
    </div>
  );
}

export default TradeIn;
