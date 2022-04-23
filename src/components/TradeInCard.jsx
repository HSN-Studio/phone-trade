import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TradeDevices from "./TradeWithCard";
import { tableBodyClasses } from "@mui/material";

function TradeInCard({ device, index, allDevices, handler }) {
  // State
  const [tradeInOption, setTradeInOption] = useState("");
  const [tradeInCondition, setTradeInCondition] = useState("");
  const [tradeDevice, setTradeDevice] = useState({
    name: "",
    price: "",
    preOwned_price: "",
  });
  const [tradeDetails, setTradeDetails] = useState({
    tradeMethod: "",
    tradeDevice: "",
    tradeDeviceCondition: "",
    tradeDevicePriceNew: "",
    tradeDevicePricePreOwned: "",
    tradeDifference: "",
  });

  // LifeCycle
  useEffect(() => {
    let deviceCompleted = { ...device, ...tradeDetails };
    handler(deviceCompleted, index);
  }, [tradeDetails]);

  // Handler
  const tradeDeviceHandler = (device) => {
    let tradeDetailstemp = { ...tradeDetails };
    tradeDetailstemp.tradeDevice = device.label;
    tradeDetailstemp.tradeDevicePriceNew = device.price;
    tradeDetailstemp.tradeDevicePricePreOwned = device.preOwned_price;
    setTradeDetails(tradeDetailstemp);
    setTradeDevice(device);
  };

  const tradeOptionHandler = (option) => {
    let tradeDetailstemp = { ...tradeDetails };
    tradeDetailstemp.tradeMethod = option;
    setTradeDetails(tradeDetailstemp);
    setTradeInOption(option);
    handler(tradeDetails, index);
  };
  const tradeConditionHandler = (condition) => {
    let tradeDetailstemp = { ...tradeDetails };
    tradeDetailstemp.tradeDeviceCondition = condition;
    if (tradeDetailstemp.tradeDeviceCondition === "New")
      tradeDetailstemp.tradeDifference =
        tradeDetailstemp.tradeDevicePriceNew - device.worth;

    if (tradeDetailstemp.tradeDeviceCondition === "PRE Owned")
      tradeDetailstemp.tradeDifference =
        tradeDetailstemp.tradeDevicePricePreOwned - device.worth;
    setTradeDetails(tradeDetailstemp);
    setTradeInCondition(condition);
  };
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
      <div>
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-helper-label"
            sx={{ backgroundColor: "white" }}
          >
            Trade With:
          </InputLabel>
          <Select
            labelId="trade-select-helper-label"
            name="method"
            id="trade-select-helper"
            value={tradeInOption}
            label="Trade Option"
            onChange={(e) => tradeOptionHandler(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Cash">Cash</MenuItem>
            <MenuItem value="Device">Device</MenuItem>
          </Select>
          <FormHelperText>Get cash or new device</FormHelperText>
        </FormControl>

        {tradeInOption === "Device" ? (
          <TradeDevices allDevices={allDevices} handler={tradeDeviceHandler} />
        ) : null}

        {tradeInOption === "Device" && tradeDevice.price ? (
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-helper-label"
              sx={{ backgroundColor: "white" }}
            >
              Device Condition:
            </InputLabel>
            <Select
              labelId="trade-select-helper-label"
              id="trade-select-helper"
              name="condition"
              value={tradeInCondition}
              label="Trade Option"
              onChange={(e) => tradeConditionHandler(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"New"}>New</MenuItem>
              {tradeDevice.preOwned_price ? (
                <MenuItem value={"PRE Owned"}>Pre Owned</MenuItem>
              ) : null}
            </Select>
          </FormControl>
        ) : null}
        {tradeDetails.tradeMethod === "Device" &&
        tradeDetails.tradeDeviceCondition ? (
          <h2>Difference: Ksh {tradeDetails.tradeDifference} </h2>
        ) : null}
        {/* {tradeInCondition === "PRE Owned" ? (
          <h2>Difference: Ksh {tradeDevice.preOwned_price - device.worth} </h2>
        ) : null} */}
      </div>
    </div>
  );
}

export default TradeInCard;
