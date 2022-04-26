import React from "react";

function CartItems({ device }) {
  return (
    <div className="cart-item-card">
      <div className="cart-item-img">
        <img
          src={`/images/model-images/${device.model
            .toLowerCase()
            .replaceAll(" ", "-")}.jpg`}
          alt={device.model}
        ></img>
      </div>
      <div className="trade-in-card-summary">
        <h2>{device.model}</h2>
        <p>{`Variant: ${device.storage}`}</p>
        <p>{`Condition: ${device.condition}`}</p>
        <p>{`Value: KSH ${device.worth} `}</p>
      </div>
    </div>
  );
}

export default CartItems;
