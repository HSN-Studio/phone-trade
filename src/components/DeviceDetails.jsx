import React, { useState, useEffect } from "react";
import StorageGuide from "./Pop-ups/StorageGuide";
import ConditionGuide from "./Pop-ups/ConditionGuide";

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
    multiplier: "",
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
    let deviceUpdate = { ...device };
    if (storage === "") {
      deviceUpdate.storage = "";
      deviceUpdate.price_new = "";
      deviceUpdate.worth = "";
      setdevice(deviceUpdate);
    }
    if (storage !== "") {
      let selectedDevice = variants.filter(
        (variant) => variant.storage == storage
      )[0];
      deviceUpdate.storage = storage;
      deviceUpdate.price_new = selectedDevice.price_new;
      deviceUpdate.worth = deviceUpdate.price_new * deviceUpdate.multiplier;
      setdevice(deviceUpdate);
    }
  };
  const gradeHandler = (grade) => {
    let deviceUpdate = { ...device };
    if (grade === "") {
      deviceUpdate.multiplier = "";
      deviceUpdate.worth = "";
    }
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
          <div className="select-variant">
            <label htmlFor="storage">Select Variant:</label>
            <select
              name="storage"
              id="storage"
              onChange={(e) => storageHandler(e.target.value)}
            >
              <option value=""></option>
              {variants.map((variant, i) => (
                <option value={variant.storage} key={i}>
                  {variant.storage}
                </option>
              ))}
            </select>
            <div id="storage-guide-link">
              <StorageGuide />
            </div>
          </div>
          <div>
            <label htmlFor="condition">Select Condition:</label>
            <select
              name="Condition"
              id="condition"
              onChange={(e) => gradeHandler(e.target.value)}
            >
              <option value=""></option>
              <option value="Grade-A">Grade A (Good)</option>
              <option value="Grade-B">Grade B (Fair)</option>
              <option value="Grade-C">Grade C (Poor)</option>
            </select>
            <div id="condition-guide-link">
              <ConditionGuide />
            </div>
          </div>
          {device.worth ? (
            <h4 className="offered-price accent-text">
              Offered Price: KSE {device.price_new * device.multiplier}
            </h4>
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
