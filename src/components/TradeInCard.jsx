import React from "react";

function TradeInCard({ device }) {
  console.log(device);
  return (
    <div className="trade-in-card">
      <div className="trade-in-card-img">
        <img
          src={`/images/model-images/${device.model
            .toLowerCase()
            .replaceAll(" ", "-")}.jpg`}
          alt={device.model}
        ></img>
      </div>
      <div className="trade-in-card-summary">
        <h3>{device.model}</h3>
        <p>{`Variant: ${device.storage}`}</p>
        <p>{`Condition: ${device.condition}`}</p>
        <p>{`Value: ${device.worth} ksh`}</p>
      </div>
    </div>
  );
}

export default TradeInCard;
