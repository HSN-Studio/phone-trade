import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function TradeDevices({ allDevices, handler }) {
  // States
  const [devices, setDevices] = useState([]);
  const [options, setOptions] = useState([]);
  const [value, setvalue] = useState(options[0]);

  // LifeCycle Methods
  useEffect(() => {
    allModels();
  }, []);

  const allModels = () => {
    const { Apple, Samsung } = allDevices;
    const devices = [...Apple, ...Samsung];
    const variants = devices.map((device) => {
      const { phone, storage, price_new } = device;
      const label = `${phone} (${storage})`;
      const tradeDeviceDetails = {
        label: label,
        phone: phone,
        storage: storage,
        price: price_new,
      };
      return tradeDeviceDetails;
    });
    setDevices(variants);
    setOptions(variants.map((variant) => variant.label));
  };

  const inputHandler = (label) => {
    if (!label) handler("");
    if (label) {
      const tradeInDevice = devices.find((device) => device.label === label);
      handler(tradeInDevice);
    }
  };

  return (
    <Autocomplete
      disablePortal
      id="trade-devices-combo-box"
      options={options}
      sx={{ width: 300, marginTop: 2 }}
      value={value}
      onChange={(e, value) => {
        inputHandler(value);
      }}
      renderInput={(params) => <TextField {...params} label="Device" />}
    />
  );
}
