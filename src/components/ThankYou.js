import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";

function ThankYou() {
  return (
    <div className="section-6">
      <div className="container thanks-container">
        <div className="thank-you-icon">
          <CheckBoxIcon sx={{ fontSize: "4rem" }} color="success" />
        </div>
        <div className="step-title">
          <h1>Thank you for using PhoneTrade.co.ke!</h1>
        </div>
        <div className="thank-you-text">
          <h3>
            Please check your Email & Inbox for the offer(s)! Our representative
            will call you in case we need input from your side. Device
            Pickup/Mail In details will be provided in the follow up Emails.{" "}
          </h3>
        </div>
        <div className="home-button">
          <Button
            variant="contained"
            endIcon={<HomeIcon />}
            href="https://phonetradein.co.ke/"
          >
            Go to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
