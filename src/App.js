import "./App.css";
import React, { useState, useEffect } from "react";
import Brand from "./components/Brand";
import Model from "./components/Model";
import Variant from "./components/Variant";
import TradeIn from "./components/TradeIn";
function App() {
  // States
  const [allDevices, setallDevices] = useState("");
  const [devicesByBrand, setdevicesByBrand] = useState([]);
  const [deviceNumber, setdeviceNumber] = useState(0);
  const [userDevices, setuserDevices] = useState([]);
  const [stepNumber, setStepNumber] = useState(1);

  // Hooks
  // Loads Info from Devices.json when App loads
  useEffect(() => {
    fetchDevices();
  }, []);

  // Loads Devices By Brand List when brand Name is loaded!
  useEffect(() => {
    userDevices[deviceNumber] ? loadDevicesByBrand() : console.log();
  }, [userDevices]);

  // Methods
  const fetchDevices = () => {
    fetch("devices.json")
      .then((res) => res.json())
      .then((data) => setallDevices(data));
  };

  const storeUserData = (brand) => {
    let currentDevices = [...userDevices];
    currentDevices[deviceNumber] = { make: brand };
    setuserDevices(currentDevices);
  };

  const loadDevicesByBrand = () => {
    let selectedBrandDevices = allDevices[`${userDevices[deviceNumber].make}`];
    let uniqueDevices = [
      ...new Map(
        selectedBrandDevices.map((device) => [device["phone"], device.phone])
      ).values(),
    ];
    setdevicesByBrand(uniqueDevices);
  };

  // Handler Function
  const brandHandler = (brand, step) => {
    storeUserData(brand);
    setStepNumber(step);
  };

  const modelHandler = (modelName, step) => {
    let currentDevices = [...userDevices];
    let currentDevice = currentDevices[deviceNumber];
    currentDevice.model = modelName;
    setuserDevices(currentDevices);
    setStepNumber(step);
  };

  const variantHandler = (device, step) => {
    let currentDevices = [...userDevices];
    currentDevices[deviceNumber] = device;
    setuserDevices(currentDevices);
    setStepNumber(step);
    console.log(device, step);
  };

  const tradeInHandler = (devices) => {
    setuserDevices(devices);
  };
  // Render Method
  const renderStep = (stepNumber) => {
    switch (stepNumber) {
      default:
        return <Brand step={stepNumber} handler={brandHandler} />;
        break;
      case 2:
        return (
          <Model
            devices={devicesByBrand}
            step={stepNumber}
            handler={modelHandler}
          />
        );
        break;
      case 3:
        return (
          <Variant
            step={stepNumber}
            handler={variantHandler}
            allDevices={allDevices}
            deviceDetails={userDevices[deviceNumber]}
            deviceNumber={deviceNumber}
          />
        );
        break;
      case 4:
        return <TradeIn devices={userDevices} handler={tradeInHandler} />;
        break;
    }
  };
  // JSX
  return <div className="App">{renderStep(stepNumber)}</div>;
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
