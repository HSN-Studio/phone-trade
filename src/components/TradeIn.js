import React, { useState } from "react";
import TradeInCard from "./TradeInCard";
function TradeIn({ allDevices, devices, step, handler, deviceNumber }) {
  //State
  const [userDevices, setUserDevices] = useState(devices);

  // Regular Functions
  const userDevicesWorth = (userDevice) =>
    userDevice.tradeMethod === "Cash" ||
    (userDevice.tradeDifference !== "" && userDevice.tradeDifference !== false);
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
  };
  // JSX
  return (
    <div className="section-4">
      <div className="step-title">
        <h1>Trade In Options</h1>
      </div>
      <div className="container trade-in-container">
        {userDevices.map((device, i) =>
          i === deviceNumber ? (
            <TradeInCard
              device={device}
              index={i}
              allDevices={allDevices}
              handler={getTradeOpt}
              key={i}
            />
          ) : null
        )}
      </div>
      <div className="section-nav section-4-nav">
        <button
          onClick={() => handler(userDevices, step - 1)}
          className="btn nav-btn"
        >
          Previous: Device Specification
        </button>
        {userDevices.every(userDevicesWorth) ? (
          <button
            onClick={() => handler(userDevices, step + 1)}
            className="btn nav-btn nav-btn-next"
          >
            Next: Contact Details
          </button>
        ) : (
          <button
            disabled
            onClick={() => handler(userDevices, step + 1)}
            className="btn nav-btn "
          >
            Next: Contact Details
          </button>
        )}
      </div>
    </div>
  );
}

export default TradeIn;
