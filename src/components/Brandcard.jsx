import React, { useState } from "react";

function Brandcard({ title, handler }) {
  return (
    <div
      className="brand-card"
      onClick={() => {
        document.querySelector(`#${title}`).checked = true;
        handler(title);
      }}
    >
      <div className="brand-logo">
        <input name="make" id={title} value={title} type="radio"></input>
      </div>
      <div className="brand-logo">
        {title === "Other" ? (
          <h2>OTHER DEVICE</h2>
        ) : (
          <img src={`/images/brand-logos/${title}-logo.png`} alt={title}></img>
        )}
      </div>
    </div>
  );
}

export default Brandcard;
