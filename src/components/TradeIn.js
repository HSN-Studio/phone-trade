import React, { useState } from "react";
import TradeInCard from "./TradeInCard";
function TradeIn({ devices, handler }) {
  //State
  const [userDevices, setUserDevices] = useState(devices);
  return (
    <div className="section-4">
      <div className="step-title">
        <h1>Trade In Options</h1>
      </div>
      <div className="container trade-in-container">
        {userDevices.map((device) => (
          <TradeInCard device={device} />
        ))}
      </div>
      <div className="section-nav section-4-nav">
        <button>Previous: Device Specification</button>
        <button>Next: Contact Details</button>
      </div>
    </div>
  );
}

export default TradeIn;
