import React from "react";

function ModelCard({ title, handler }) {
  let modelTitle = title
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll(/[()]/g, "");
  // regular functions
  // JSX
  return (
    <div
      className="model-card"
      onClick={() => {
        document.querySelector(`#${modelTitle}`).checked = true;
        handler(title);
      }}
    >
      <input type="radio" name="model" id={modelTitle} value={title}></input>
      <img
        src={`https://havelivirasat.com/phonetradeapp/images/model-images/${title
          .toLowerCase()
          .replaceAll(" ", "-")}.jpg`}
        alt={title}
        className="model-card-img"
      ></img>
      <h2 className="model-card-title">{title}</h2>
    </div>
  );
}

export default ModelCard;
