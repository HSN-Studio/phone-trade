import React, { useState } from "react";
import TradeInCard from "./TradeInCard";
function TradeIn({ allDevices, devices, step, handler }) {
  //State
  const [userDevices, setUserDevices] = useState(devices);

  // Handler Functions
  const getTradeOpt = (device, index) => {
    let userDevicestemp = userDevices.map((userDevice, i) => {
      if (i === index) {
        userDevice.tradeMethod = device.tradeMethod;
        userDevice.tradeDevice = device.tradeDevice;
        userDevice.tradeDeviceCondition = device.tradeDeviceCondition;
        userDevice.tradeDevicePriceNew = device.tradeDevicePriceNew;
        userDevice.tradeDevicePricePreOwned = device.tradeDevicePricePreOwned;
        userDevice.tradeDifference = device.tradeDifference;
      }
      return userDevice;
    });
    setUserDevices(userDevicestemp);
    console.table(userDevices);
  };
  // JSX
  return (
    <div className="section-4">
      <div className="step-title">
        <h1>Trade In Options</h1>
      </div>
      <div className="container trade-in-container">
        {userDevices.map((device, i) => (
          <TradeInCard
            device={device}
            index={i}
            allDevices={allDevices}
            handler={getTradeOpt}
            key={i}
          />
        ))}
      </div>
      <div className="section-nav section-4-nav">
        <button
          onClick={() => handler(userDevices, step - 1)}
          className="btn nav-btn"
        >
          Previous: Device Specification
        </button>
        {}
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
