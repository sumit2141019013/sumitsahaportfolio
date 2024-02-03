import { Button, Typography } from "@mui/material";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactRightBar"></div>

      <div className="contactContainer">
          <form
            className="contactContainerForm"
            target="_blank"
            action="https://formsubmit.co/sumitsaha74500@gmail.com"
            method="POST"
          >
            <Typography variant="h4">CONTACT US </Typography>

            <input type="text" placeholder="Full Name"  name="Full Name" required/>
            <input type="email" placeholder="Email@gmail.com"  name="Email@gmail.com" required/>
            <textarea placeholder="Message"  cols="30" rows="10" name="Message" required></textarea>
            <Button variant="contained" type="submit">
              Send
            </Button>
          </form>
      </div>
    </div>
  );
};

export default Contact;
