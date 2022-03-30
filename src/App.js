import "./App.css";
import React, { useState, useEffect } from "react";
import Brandcard from "./components/Brandcard";
import ModelCard from "./components/ModelCard";
function App() {
  // Variables

  // States
  const [allDevices, setallDevices] = useState([]);
  const [deviceNumber, setdeviceNumber] = useState(0);
  const [userDevices, setuserDevices] = useState([
    {
      make: "Iphone",
      model: "6 plus",
      priceNew: "$500",
      storage: "16gb",
      condition: "A-Grade",
      priceUsed: "$250",
    },
  ]);
  const [devices, setdevices] = useState("");
  // Hooks
  useEffect(() => {
    fetchDevices();
  }, []);
  // useEffect(() => {
  //   uniqueDevices.length > 0 && setallDevices(uniqueDevices);
  // }, [uniqueDevices]);

  // Methods
  const fetchDevices = () => {
    fetch("devices.json")
      .then((res) => res.json())
      .then((data) => setdevices(data));
  };
  // Handler Function
  const brandClickHandler = (brand) => {
    let currentDevices = [...userDevices];
    currentDevices[deviceNumber] = { make: brand };
    setuserDevices(currentDevices);
  };

  const nextClickHandler = () => {
    let selectedMakeDevices = devices[`${userDevices[deviceNumber].make}`];
    if (!selectedMakeDevices) return;
    console.log("Hello");
    const uniqueDevices = [
      ...new Map(
        selectedMakeDevices.map((device) => [device["phone"], device.phone])
      ).values(),
    ];
    console.log(uniqueDevices);
    setallDevices(uniqueDevices);
  };
  const modelClickHandler = (modelName) => {};
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
        {allDevices.map((device, i) => (
          <ModelCard key={`device-number${i}`} title={device.phone} />
        ))}
      </div>
    </div>
  );
}

export default App;
