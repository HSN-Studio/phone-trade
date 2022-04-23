import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

function Contact({ devices, step, handler }) {
  //States
  const [ready, setReady] = useState(false);
  const [contactInfo, setcontactInfo] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    address: "",
    city: "",
    deviceCollection: "Walk-In",
    time: "",
  });

  useEffect(() => {
    console.table(devices);
  }, []);

  //Handler Functions
  const inputHandler = (event) => {
    let contactInfotemp = { ...contactInfo };

    if (event.target.name === "mobileNumber") {
      const regex = /^[0-9\b]+$/;
      if (event.target.value === "" || regex.test(event.target.value)) {
        contactInfotemp.mobileNumber = event.target.value;
        setcontactInfo(contactInfotemp);
      }
    } else {
      contactInfotemp[event.target.name] = event.target.value;
      setcontactInfo(contactInfotemp);
    }
  };

  const dateTimeHandler = (dateTime) => {
    let contactInfotemp = { ...contactInfo };
    contactInfotemp.time = dateTime;
    setcontactInfo(contactInfotemp);
    console.log(contactInfotemp);
  };

  const submitHandler = () => {
    console.log(contactInfo);
  };
  // JSX
  return (
    <div className="contact-form-container">
      <TextField
        required
        name="name"
        label="Name"
        type="text"
        onChange={inputHandler}
      />
      <TextField
        required
        name="email"
        label="Email"
        type="email"
        onChange={inputHandler}
      />
      <TextField
        name="mobileNumber"
        label="Mobile Number"
        type="tel"
        value={contactInfo.mobileNumber}
        onChange={inputHandler}
        required
      />
      <TextField
        required
        name="address"
        label="Address"
        type="text"
        fullWidth
        onChange={inputHandler}
      />
      <TextField
        required
        name="city"
        label="City"
        type="text"
        onChange={inputHandler}
      />
      <FormControl fullWidth>
        <FormLabel id="device-pickup-method-label">
          Device(s) Collection:
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="device-collection-options"
          name="deviceCollection"
          value={contactInfo.deviceCollection}
          onChange={inputHandler}
        >
          <FormControlLabel
            value="Walk-In"
            control={<Radio />}
            label="Book a Walk-in appointment"
          />
          <FormControlLabel
            value="Pickup"
            control={<Radio />}
            label="Request for Pick up (Outside Nairobi/Mombasa)"
          />
          <FormControlLabel
            value="G4S Mail In"
            control={<Radio />}
            label="G4S Mail In (Outside Nairobi/Mombasa/Nakuru)"
          />
        </RadioGroup>
      </FormControl>
      {contactInfo.deviceCollection === "Walk-In" ||
      contactInfo.deviceCollection === "Pickup" ? (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            name="time"
            label="Select Date & Time"
            minDateTime={new Date()}
            onChange={(newDateTime) => {
              dateTimeHandler(newDateTime);
            }}
          />
        </LocalizationProvider>
      ) : null}
      <div className="section-nav section-5-nav">
        <button
          onClick={() => handler(devices, step - 1)}
          className="btn nav-btn"
        >
          Previous: Trade-In Options
        </button>
        {ready ? (
          <button
            onClick={() => submitHandler(devices, step + 1)}
            className="btn nav-btn"
          >
            Submit
          </button>
        ) : (
          <button disabled className="btn nav-btn">
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default Contact;
