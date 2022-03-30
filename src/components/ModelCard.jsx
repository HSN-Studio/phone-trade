import React from "react";

function ModelCard({ title }) {
  // regular functions
  // JSX
  return (
    <div
      className="model-card"
      onClick={() => (document.querySelector(`#${title}`).checked = true)}
    >
      <input type="radio" name="model" id={title} value={title}></input>
      <h2 className="model-card-title">{title}</h2>
      <img
        src={`/images/model-images/${title
          .toLowerCase()
          .replaceAll(" ", "-")}.png`}
        alt={title}
        className="model-card-img"
        style={{ width: "150px", height: "auto" }}
      ></img>
    </div>
  );
}

export default ModelCard;
