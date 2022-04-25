import React, { useState, useEffect } from "react";
import DeviceDetails from "./DeviceDetails";

function Variant({ step, handler, allDevices, deviceDetails, deviceNumber }) {
  const [device, setDevice] = useState({
    make: deviceDetails.make,
    model: deviceDetails.model,
    multiplier: deviceDetails.multiplier,
    worth: deviceDetails.worth,
  });


  // Handlers
  const deviceDetailsHandler = (device) => {
    setDevice(device);
  };

  return (
    <div className="section-3">
      <div className="step-title">
        <h1>Device Details:</h1>
      </div>
      <div className="container variant-container">
        <div>
          <DeviceDetails
            deviceDetails={deviceDetails}
            allDevices={allDevices}
            handler={deviceDetailsHandler}
          />
        </div>
      </div>
      <div className="section-nav section-3-nav">
        <button
          onClick={() => handler(device, step - 1)}
          className="btn nav-btn"
        >
          Previous: Select Model
        </button>
        {device.worth ? (
          <button
            onClick={() => handler(device, step + 1)}
            className="btn nav-btn"
          >
            Next: Trade In Options
          </button>
        ) : (
          <button
            disabled
            onClick={() => handler(device, step + 1)}
            className="btn nav-btn"
          >
            Next: Trade In Options
          </button>
        )}
      </div>
    </div>
  );
}

export default Variant;
