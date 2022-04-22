import React, { useState } from "react";
import ModelCard from "./ModelCard";

function Model({ devices, step, handler }) {
  //State
  const [model, setModel] = useState();
  // Handler
  const modelCardHandler = (model) => setModel(model);
  return (
    <div className="section-2">
      <div className="step-title">
        <h1>Choose Device Model:</h1>
      </div>
      <div className="container models-container">
        {devices.map((device, i) => (
          <ModelCard
            key={`device-number${i}`}
            title={device}
            handler={modelCardHandler}
          />
        ))}
      </div>
      <div className="section-nav section-2-nav">
        <button
          onClick={() => handler(model, step - 1)}
          className="btn nav-btn"
        >
          Previous: Select Brand
        </button>
        {model ? (
          <button
            onClick={() => handler(model, step + 1)}
            className="btn nav-btn"
          >
            Next: Device Details
          </button>
        ) : (
          <button
            disabled
            onClick={() => handler(model, step + 1)}
            className="btn nav-btn"
          >
            Next: Device Details
          </button>
        )}
      </div>
    </div>
  );
}

export default Model;
