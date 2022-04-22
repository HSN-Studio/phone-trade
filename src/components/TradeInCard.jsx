import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TradeDevices from "./TradeWithCard";
import { tableBodyClasses } from "@mui/material";

function TradeInCard({ device, index, allDevices }) {
  // State
  const [tradeInOption, setTradeInOption] = useState("");
  const [tradeInCondition, setTradeInCondition] = useState("");
  const [tradeDevice, setTradeDevice] = useState({
    name: "",
    price: "",
    preOwned_price: "",
  });

  // LifeCycle

  // Handler
  const tradeDeviceHandler = (device) => {
    setTradeDevice(device);
    console.log(tradeDevice);
  };

  const tradeOptionHandler = (option) => {
    setTradeInOption(option);
  };
  const tradeConditionHandler = (condition) => {
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

        {tradeDevice.price ? (
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
              <MenuItem value={"PRE Owned"}>Pre Owned</MenuItem>
            </Select>
          </FormControl>
        ) : null}
        {tradeInOption === "Device" && tradeDevice.price ? (
          
          <h2>Difference: Ksh {tradeDevice.price - device.worth} </h2>
        ) : null}
      </div>
    </div>
  );
}

export default TradeInCard;
