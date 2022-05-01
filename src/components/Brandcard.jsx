import React, { useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

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
          <a target="_blank" href="https://phonetradein.co.ke/contact-us/">
            <h2>
              OTHER DEVICE <ArrowCircleRightIcon />
            </h2>
          </a>
        ) : (
          <img
            src={`https://phonetradein.co.ke/trade/images/brand-logos/${title.toLowerCase()}-logo.png`}
            alt={title}
          ></img>
        )}
      </div>
    </div>
  );
}

export default Brandcard;
