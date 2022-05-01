import React from "react";

function CartItems({ device }) {
  return (
    <div className="cart-item-card">
      <div className="cart-item-img">
        <img
          src={`https://phonetradein.co.ke/trade/images/model-images/${device.model
            .toLowerCase()
            .replaceAll(" ", "-")}.jpg`}
          alt={device.model}
        ></img>
      </div>
      <div className="cart-item-summary">
        <h3>{device.model}</h3>
        <p>{`Variant: ${device.storage}`}</p>
        <p>{`Condition: ${device.condition}`}</p>
        <p className="">
          {device.tradeMethod === "Cash"
            ? `Trade In Amount: KSH ${device.worth} `
            : `Trade Device: ${device.tradeDevice}`}
        </p>
        <h4 className="accent-text">
          {device.tradeMethod === "Device"
            ? `Difference: ${device.tradeDifference}`
            : null}
        </h4>
      </div>
    </div>
  );
}

export default CartItems;
