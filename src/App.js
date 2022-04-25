import "./App.css";
import React, { useState, useEffect } from "react";
import Brand from "./components/Brand";
import Model from "./components/Model";
import Variant from "./components/Variant";
import TradeIn from "./components/TradeIn";
import Contact from "./components/Contact";
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
    console.log(userDevices);
    let currentDevices = [...userDevices];
    let currentDevice = currentDevices[deviceNumber];
    currentDevice.model = modelName;
    currentDevice.multiplier = "";
    currentDevice.worth = "";
    setuserDevices(currentDevices);
    setStepNumber(step);
  };

  const variantHandler = (device, step) => {
    let currentDevices = [...userDevices];
    currentDevices[deviceNumber] = device;
    setuserDevices(currentDevices);
    setStepNumber(step);
  };

  const tradeInHandler = (devices, step) => {
    setuserDevices(devices);
    setStepNumber(step);
  };

  const contactHandler = (devices, step) => {
    setuserDevices(devices);
    setStepNumber(step);
  };
  const addDeviceHandler = (deviceNumber, step) => {
    setdeviceNumber(deviceNumber);
    setStepNumber(step);
    console.log(deviceNumber);
  };
  // Render Method
  const renderStep = (stepNumber) => {
    switch (stepNumber) {
      default:
        return (
          <Brand
            step={stepNumber}
            handler={brandHandler}
            deviceNumber={deviceNumber}
          />
        );
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
        return (
          <TradeIn
            allDevices={allDevices}
            devices={userDevices}
            step={stepNumber}
            handler={tradeInHandler}
            deviceNumber={deviceNumber}
          />
        );
        break;
      case 5:
        return (
          <Contact
            devices={userDevices}
            step={stepNumber}
            handler={contactHandler}
            deviceNumber={deviceNumber}
            addHandler={addDeviceHandler}
          />
        );
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

// API Keys Woocommerce
// ck_a3dd75042e32e5b9d04d3a1216a4386d30ddcc44
// cs_a66a4bcff2a349122f17806f977561a310c9d74a
