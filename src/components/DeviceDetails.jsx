import React, { useState, useEffect } from "react";

function DeviceDetails({ deviceDetails, allDevices, handler }) {
  let deviceModelInfo = deviceDetails;
  //Handler Functions

  //States
  const [device, setdevice] = useState({
    make: deviceDetails.make,
    model: deviceDetails.model,
    storage: "",
    condition: "",
    price_new: "",
    worth: "",
    multiplier: 1,
  });

  // Hooks
  useEffect(() => {
    setdevice(deviceModelInfo);
  }, [deviceModelInfo]);
  
  useEffect(() => {
    handler(device);
  }, [device]);

  // Variables
  let variants = allDevices[deviceDetails.make].filter(
    (device) => device.phone === deviceDetails.model
  );

  //Methods
  const storageHandler = (storage) => {
    if (!storage) return;
    let selectedDevice = variants.filter(
      (variant) => variant.storage == storage
    )[0];
    let deviceUpdate = { ...device };
    deviceUpdate.storage = storage;
    deviceUpdate.price_new = selectedDevice.price_new;
    setdevice(deviceUpdate);
  };
  const gradeHandler = (grade) => {
    if (!grade) return;
    let deviceUpdate = { ...device };
    deviceUpdate.condition = grade;
    if (grade === "Grade-A") {
      deviceUpdate.multiplier = 0.5;
      deviceUpdate.worth = deviceUpdate.price_new * 0.5;
    }
    if (grade === "Grade-B") {
      deviceUpdate.multiplier = 0.4;
      deviceUpdate.worth = deviceUpdate.price_new * 0.4;
    }
    if (grade === "Grade-C") {
      deviceUpdate.multiplier = 0.15;
      deviceUpdate.worth = deviceUpdate.price_new * 0.15;
    }
    setdevice(deviceUpdate);
  };
  // JSX
  return (
    <div className="device-details-container">
      <div className="specifications">
        <div className="specs-content">
          <h2>Select Device Specs:</h2>
          <h3>{deviceDetails.model}</h3>
          <select
            name="storage"
            id="storage"
            onChange={(e) => storageHandler(e.target.value)}
          >
            <option>Select Storage</option>
            {variants.map((variant, i) => (
              <option value={variant.storage} key={i}>
                {variant.storage}
              </option>
            ))}
          </select>
          <select
            name="Condition"
            id="condition"
            onChange={(e) => gradeHandler(e.target.value)}
          >
            <option>Select Condition</option>
            <option value="Grade-A">Grade A (Good)</option>
            <option value="Grade-B">Grade B (Fair)</option>
            <option value="Grade-C">Grade C (Poor)</option>
          </select>
          {device.price_new ? (
            <h3>Brand New Price: Ksh {device.price_new}</h3>
          ) : null}
          {device.multiplier !== 1 ? (
            <h3>Offered Price: Ksh {device.price_new * device.multiplier}</h3>
          ) : null}
        </div>
      </div>
      <div className="summary">
        <img
          src={`/images/model-images/${deviceDetails.model
            .toLowerCase()
            .replaceAll(" ", "-")}.jpg`}
          alt={deviceDetails.model}
        ></img>
      </div>
    </div>
  );
}

export default DeviceDetails;
