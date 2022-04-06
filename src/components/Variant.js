import React, { useState } from "react";
import DeviceDetails from "./DeviceDetails";

function Variant({ step, handler, allDevices, deviceDetails, deviceNumber }) {
  const [device, setDevice] = useState();
  // Handlers
  const deviceDetailsHandler = (device) => {
    setDevice(device);
    console.log(device);
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
        <button onClick={() => console.log(step - 1)}>
          Previous: Select Model
        </button>
        <button onClick={() => handler(device, step + 1)}>
          Next: Trade In Options
        </button>
      </div>
    </div>
  );
}

export default Variant;
