import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import AddTaskIcon from "@mui/icons-material/AddTask";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import CartItems from "./CartItems";

function Contact({ devices, step, handler, deviceNumber, addHandler }) {
  //States
  let userBalanceTemp;
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
  const [city, setCity] = useState("Arboretum");
  const [contactInfo, setcontactInfo] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    address: "",
    city: "Arboretum",
    otherCity: "",
    deviceCollection: "",
    time: "",
  });
  const [nameError, setnameError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [mobileNumberError, setmobileNumberError] = useState(false);
  const [addressError, setaddressError] = useState(false);
  const [cityError, setcityError] = useState(false);
  const [timeError, settimeError] = useState(false);
  const [deviceCollectionError, setdeviceCollectionError] = useState(false);
  const [userBalance, setUserBalance] = useState(0);

  // useEffect(() => {
  //   console.log(contactInfo, devices);
  //   // balanceCalculator();
  // }, [contactInfo]);
  // useEffect(() => {
  //   balanceCalculator();
  // }, [userBalanceTemp]);

  //Handler Functions
  const inputHandler = (event) => {
    let contactInfotemp = { ...contactInfo };

    if (event.target.name === "mobileNumber") {
      const regex = /^[0-9\b]+$/;
      if (event.target.value === "" || regex.test(event.target.value)) {
        contactInfotemp.mobileNumber = event.target.value;
        setcontactInfo(contactInfotemp);
      }
    }
    if (event.target.name === "city") {
      contactInfotemp.otherCity = event.target.value;
      setcontactInfo(contactInfotemp);
    } else {
      contactInfotemp[event.target.name] = event.target.value;
      setcontactInfo(contactInfotemp);
    }
  };
  const cityHandler = (cityName) => {
    if (cityName === null) return;
    let contactInfotemp = { ...contactInfo };
    contactInfotemp.city = cityName;
    setcontactInfo(contactInfotemp);
    setCity(cityName);
  };
  const dateTimeHandler = (dateTime) => {
    let contactInfotemp = { ...contactInfo };
    contactInfotemp.time = dateTime;
    setcontactInfo(contactInfotemp);
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
    let validation = /^(07)([0-9|7])(\d){7}$/.test(contactInfo.mobileNumber);
    validation === true
      ? setmobileNumberError(false)
      : setmobileNumberError(true);
    return validation === true ? true : false;
  };
  const addressValidator = () => {
    let validation = contactInfo.address !== "" ? true : false;
    validation === true ? setaddressError(false) : setaddressError(true);
    return validation === true ? true : false;
  };

  const cityValidator = () => {
    let validation =
      /^[a-zA-Z\s]*$/.test(contactInfo.city) && contactInfo.city !== "Other";
    validation === true ? setcityError(false) : setcityError(true);
    return validation === true ? true : false;
  };
  const pickupValidator = () => {
    contactInfo.deviceCollection
      ? setdeviceCollectionError(false)
      : setdeviceCollectionError(true);
    return contactInfo.deviceCollection !== "" ? true : false;
  };
  const timeValidator = () => {
    contactInfo.time !== "" ? settimeError(false) : settimeError(true);
    return contactInfo.time !== "" ? true : false;
  };
  const inputsValidator = () => {
    if (
      nameValidator() === true &&
      emailValidator() === true &&
      mobileNoValidator() === true &&
      addressValidator() === true &&
      cityValidator() === true &&
      pickupValidator() === true &&
      timeValidator() === true
    )
      window.alert(
        "Sucess, Info retrieved by server! info: SMS Api Not working!"
      );
    console.table(devices);
    console.table(contactInfo);
  };
  const balanceCalculator = () => {
    devices.forEach((device) => {
      console.log(userBalance);
      userBalanceTemp = userBalance;
      device.tradeDifference !== ""
        ? setUserBalance((userBalanceTemp += device.tradeDifference))
        : setUserBalance((userBalanceTemp += device.worth));
    });
  };
  const submitHandler = () => {
    inputsValidator();
    // balanceCalculator();
  };

  // JSX
  return (
    <div className="section-5">
      <div className="step-title">
        <h1>Checkout</h1>
      </div>
      <div className="container contact-container">
        <div className="contact-form-container">
          <div className="contact-form-tite">
            <h2>Contact Details</h2>
          </div>
          <TextField
            required
            error={nameError === true}
            helperText={nameError ? "Invalid Name (only use letters A-Z)" : ""}
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
            helperText={addressError ? "Address field can not be empty" : ""}
            type="text"
            fullWidth
            onChange={inputHandler}
            onBlur={addressValidator}
          />
          {/* <TextField
            required
            name="city"
            label="City"
            error={cityError === true}
            helperText={cityError ? "Invalid Input (only use letters A-Z)" : ""}
            type="text"
            onChange={inputHandler}
            onBlur={cityValidator}
          /> */}
          {/* /* City */}
          <Autocomplete
            error
            disablePortal
            id="cities-list-combo-box"
            name="city"
            options={cities}
            fullWidth
            value={city}
            onChange={(e, value) => {
              cityHandler(value);
            }}
            renderInput={(params) => <TextField {...params} label=" City" />}
          />
          {contactInfo.city === "Other" ? (
            <TextField
              required
              name="city"
              label="City"
              error={cityError === true}
              helperText={cityError ? "Invalid Name(only use letters A-Z)" : ""}
              type="text"
              onChange={inputHandler}
              onBlur={cityValidator}
            />
          ) : null}
          {contactInfo.city !== "" ? (
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
                {contactInfo.city !== "Other" ? (
                  <FormControlLabel
                    value="Pickup"
                    control={<Radio />}
                    label="Request for Pick up (Outside Nairobi/Mombasa)"
                  />
                ) : null}
                <FormControlLabel
                  value="G4S Mail In"
                  control={<Radio />}
                  label="G4S Mail In (Outside Nairobi/Mombasa/Nakuru)"
                />
              </RadioGroup>
            </FormControl>
          ) : null}
          {contactInfo.deviceCollection === "Walk-In" ||
          contactInfo.deviceCollection === "Pickup" ? (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => (
                  <TextField
                    sx={{
                      p: {
                        color: "red",
                      },
                    }}
                    helperText={
                      timeError ? "Please select pickup date & time" : ""
                    }
                    {...props}
                  />
                )}
                name="time"
                label="Select Date & Time"
                minDateTime={new Date()}
                onChange={(newDateTime) => {
                  dateTimeHandler(newDateTime);
                }}
                onBlur={timeValidator}
              />
            </LocalizationProvider>
          ) : null}
        </div>
        <div className="checkout-summary">
          <div>
            <h2>Your Trade Ins</h2>
          </div>
          <div className="checkout-devices">
            {devices.map((device, i) => (
              <CartItems device={device} key={i} />
            ))}
          </div>
          <div className="user-balance">
            {userBalance !== 0 ? (
              <h3 className="accent-text">Balance: {userBalance} KSH </h3>
            ) : null}
          </div>
          <div className="add-another-device">
            <Button
              variant="contained"
              endIcon={<AddTaskIcon />}
              onClick={() => addHandler(deviceNumber + 1, 0)}
            >
              Add another device
            </Button>
          </div>
        </div>
      </div>
      <div className="section-nav section-5-nav">
        <button
          onClick={() => handler(devices, step - 1)}
          className="btn nav-btn"
        >
          Previous: Trade-In Options
        </button>
        {city ? (
          <button
            onClick={() => submitHandler()}
            className="btn nav-btn nav-btn-next"
          >
            Submit
          </button>
        ) : (
          <button disabled className="btn nav-btn ">
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default Contact;
