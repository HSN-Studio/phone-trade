import React from "react";

function Brandcard({ title = "other", handler }) {
  let deviceNumber = 1;
  return (
    <div
      className="brand-card"
      onClick={() => {
        document.querySelector(`#${title}`).checked = true;
        handler(title, deviceNumber);
      }}
    >
      <div>
        <input name="make" id={title} value={title} type="radio"></input>
      </div>
      <div className="brand-logo">
        {title === "other" ? (
          <h2>{title}</h2>
        ) : (
          <img src={`/images/brand-logos/${title}-logo.png`} alt={title}></img>
        )}
      </div>
    </div>
  );
}

export default Brandcard;
