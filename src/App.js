import "./App.css";
import React, { useState, useEffect } from "react";
import Brandcard from "./components/Brandcard";
import ModelCard from "./components/ModelCard";
import DeviceDetails from "./components/DeviceDetails";
function App() {
  // States
  const [allDevices, setallDevices] = useState("");
  const [devicesByBrand, setdevicesByBrand] = useState([]);
  const [deviceNumber, setdeviceNumber] = useState(0);
  const [userDevices, setuserDevices] = useState([]);
  // Hooks
  useEffect(() => {
    fetchDevices();
  }, []);

  // Methods
  const fetchDevices = () => {
    fetch("devices.json")
      .then((res) => res.json())
      .then((data) => setallDevices(data));
  };
  // Handler Function
  const brandClickHandler = (brand) => {
    let currentDevices = [...userDevices];
    currentDevices[deviceNumber] = { make: brand };
    setuserDevices(currentDevices);
  };

  const nextClickHandler = () => {
    let selectedMakeDevices = allDevices[`${userDevices[deviceNumber].make}`];
    if (!selectedMakeDevices) setdevicesByBrand([]);
    let uniqueDevices = [
      ...new Map(
        selectedMakeDevices.map((device) => [device["phone"], device.phone])
      ).values(),
    ];
    setdevicesByBrand(uniqueDevices);
  };
  const modelClickHandler = (modelName) => {
    let currentDevices = [...userDevices];
    let currentDevice = currentDevices[deviceNumber];
    currentDevice.model = modelName;
    setuserDevices(currentDevices);
    console.log(currentDevices);
  };
  // JSX
  return (
    <div className="App">
      <div className="section-1">
        <div className="brands-container">
          <Brandcard title="Apple" handler={brandClickHandler} />
          <Brandcard title="Samsung" handler={brandClickHandler} />
          <Brandcard handler={brandClickHandler} />
        </div>
        <button onClick={() => nextClickHandler()}>Next</button>
      </div>
      <div className="section-2">
        <h3>Select Model:</h3>
        {devicesByBrand.map((device, i) => (
          <ModelCard
            key={`device-number${i}`}
            title={device}
            handler={modelClickHandler}
          />
        ))}
      </div>
      <div className="section-3">
        <h3>Device Details</h3>
        {userDevices[deviceNumber] && "model" in userDevices[deviceNumber] ? (
          <DeviceDetails
            deviceDetails={userDevices[deviceNumber]}
            allDevices={allDevices}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;

// {
//   make: "Iphone",
//   model: "6 plus",
//   priceNew: "$500",
//   storage: "16gb",
//   condition: "A-Grade",
//   priceUsed: "$250",
// },
