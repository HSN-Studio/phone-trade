import React, { useState, useEffect } from "react";
import Brandcard from "./Brandcard";
function Brand({ step, handler, deviceNumber }) {
  // States
  const [brand, setBrand] = useState();

  // Handler Functions
  const brandClickHandler = (brand) => {
    setBrand(brand);
  };
  return (
    <div className="section-1">
      <div className="step-title">
        <h1>Select Brand:</h1>
      </div>
      <div className="container brands-container">
        <Brandcard title="Apple" handler={brandClickHandler} />
        <Brandcard title="Samsung" handler={brandClickHandler} />
        {deviceNumber < 1 ? (
          <Brandcard title="Other" handler={brandClickHandler} />
        ) : null}
      </div>
      <div className="section-nav section-1-nav">
        {!brand || brand === "Other" ? (
          <button disabled className="btn nav-btn ">
            Next: Device Model
          </button>
        ) : (
          <button
            onClick={() => handler(brand, step + 1)}
            className="btn nav-btn nav-btn-next"
          >
            Next: Device Model
          </button>
        )}
      </div>
    </div>
  );
}

export default Brand;
