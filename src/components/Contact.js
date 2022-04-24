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
  const cities = [
    "Arboretum",
    "Cbd",
    "Brookside Drive",
    "Gigiri",
    "Hurlingham",
    "Kileleshwa",
    "Kilimani",
    "Kitisuru",
    "Kyuna",
    "Lavington",
    "Loresho",
    "Lower Kabete",
    "Mountain View",
    "Ngong Road (Up to Junction Mall)",
    "Nyari",
    "Parklands",
    "Riverside Drive",
    "Runda",
    "Spring Valley",
    "Upper hill",
    "Westland",
    "Other",
  ];
  const [ready, setReady] = useState(true);
  const [contactInfo, setcontactInfo] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    address: "",
    city: "",
    deviceCollection: "Walk-In",
    time: "",
  });
  const [nameError, setnameError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [mobileNumberError, setmobileNumberError] = useState(false);
  const [addressError, setaddressError] = useState(false);
  const [cityError, setcityError] = useState(false);

  // useEffect(() => {
  //   console.log(contactInfo);
  // }, [contactInfo]);

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

  const nameValidator = () => {
    let validation =
      /^[a-zA-Z\s]*$/.test(contactInfo.name) && contactInfo.name !== "";
    validation ? setnameError(false) : setnameError(true);
    return validation ? true : false;
  };
  const emailValidator = () => {
    let validation =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        contactInfo.email.toString().toLowerCase()
      );
    validation === true ? setemailError(false) : setemailError(true);
    return validation ? true : false;
  };
  const mobileNoValidator = () => {
    let validation = /^(07)([0-9|7])(\d){7}$/.test(+contactInfo.mobileNumber);
    validation === true
      ? setmobileNumberError(false)
      : setmobileNumberError(true);
    return validation === true ? true : false;
  };
  const addressValidator = () => {
    let validation =
      /^[a-zA-Z\s]*$/.test(contactInfo.address) && contactInfo.address !== "";
    validation === true ? setaddressError(false) : setaddressError(true);
    return validation === true ? true : false;
  };

  const cityValidator = () => {
    let validation =
      /^[a-zA-Z\s]*$/.test(contactInfo.city) && contactInfo.city !== "";
    validation === true ? setcityError(false) : setcityError(true);
    return validation === true ? true : false;
  };
  const inputsValidator = () => {};
  const dateTimeHandler = (dateTime) => {
    let contactInfotemp = { ...contactInfo };
    contactInfotemp.time = dateTime;
    setcontactInfo(contactInfotemp);
    console.log(contactInfotemp);
  };

  const submitHandler = () => {
    console.log(inputsValidator());
  };

  // JSX
  return (
    <div className="contact-form-container">
      <TextField
        required
        error={nameError === true}
        helperText={nameError ? "*Invalid Name (only use letters A-Z)" : ""}
        name="name"
        label="Name"
        type="text"
        onChange={inputHandler}
        onBlur={nameValidator}
      />
      <TextField
        required
        error={emailError === true}
        helperText={emailError ? "Invalid Email Address" : ""}
        name="email"
        label="Email"
        type="email"
        onChange={inputHandler}
        onBlur={emailValidator}
      />
      <TextField
        name="mobileNumber"
        label="Mobile Number"
        error={mobileNumberError === true}
        helperText={
          mobileNumberError
            ? "Invalid Mobile Number (use format:07XXXXXXXX)"
            : ""
        }
        type="tel"
        value={contactInfo.mobileNumber}
        onChange={inputHandler}
        onBlur={mobileNoValidator}
        required
      />
      <TextField
        required
        name="address"
        label="Address"
        error={addressError === true}
        helperText={addressError ? "Address field can not be empty!" : ""}
        type="text"
        fullWidth
        onChange={inputHandler}
        onBlur={addressValidator}
      />
      <TextField
        required
        name="city"
        label="City"
        error={cityError === true}
        helperText={cityError ? "City field can not be empty!" : ""}
        type="text"
        onChange={inputHandler}
        onBlur={cityValidator}
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
