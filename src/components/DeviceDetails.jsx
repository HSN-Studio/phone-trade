import React, { useState } from "react";

function DeviceDetails({ deviceDetails, allDevices }) {
  //States
  const [device, setdevice] = useState({
    make: deviceDetails.make,
    model: deviceDetails.model,
    storage: "",
    condition: "",
  });

  // Variables
  let variants = allDevices[deviceDetails.make].filter(
    (device) => device.phone === deviceDetails.model
  );

  //Methods
  const storageHandler = (storage) => {
    // let deviceUpdate = { ...device };
    // deviceUpdate.storage = storage;
    // setdevice(deviceUpdate);
    device.storage && device.condition
      ? console.log(variants.map((variant) => variant.storage === storage))
      : console.log("iko");
  };
  const gradeHandler = (grade) => {
    let deviceUpdate = { ...device };
    deviceUpdate.condition = grade;
    setdevice(deviceUpdate);
  };
  // JSX
  return (
    <div className="device-details">
      <div className="specification">
        <h2>Select Device Specs:</h2>
        <select
          name="storage"
          id="storage"
          onChange={(e) => storageHandler(e.target.value)}
        >
          {variants.map((variant) => (
            <option value={variant.storage}>{variant.storage}</option>
          ))}
        </select>
        <select
          name="Condition"
          id="condition"
          onChange={(e) => gradeHandler(e.target.value)}
        >
          <option value="Grade-A">Grade A (Good)</option>
          <option value="Grade-B">Grade B (Fair)</option>
          <option value="Grade-C">Grade C (Poor)</option>
        </select>
        <h3 className="device-price-new"></h3>
      </div>
      <div className="summary">
        <img
          src={`/images/model-images/${deviceDetails.model
            .toLowerCase()
            .replaceAll(" ", "-")}.png`}
          alt={deviceDetails.model}
        ></img>
        <h2>{deviceDetails.model}</h2>
        <h3>{`Brand New Price: ${variants[0].price_new}`}</h3>
      </div>
    </div>
  );
}

export default DeviceDetails;
