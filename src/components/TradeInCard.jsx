import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function TradeInCard({ device, index, allDevices }) {
  // State
  const [tradeInOption, setTradeInOption] = useState("");

  // LifeCycle
  // Handler
  console.log(device, index, allDevices, tradeInOption);
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
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel
            id="demo-simple-select-helper-label"
            sx={{ backgroundColor: "white" }}
          >
            Trade With:
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={tradeInOption}
            label="Age"
            onChange={(e) => setTradeInOption(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Cash"}>Cash</MenuItem>
            <MenuItem value={"Device"}>Device</MenuItem>
          </Select>
          <FormHelperText>Get cash or new device</FormHelperText>
        </FormControl>
      </div>
    </div>
  );
}

export default TradeInCard;
