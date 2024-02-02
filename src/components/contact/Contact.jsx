import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="contact">
      <div className="contactRightBar"></div>

      <div className="contactContainer">
        {!formSubmitted ? (
          <form
            className="contactContainerForm"
            target="_blank"
            action="https://formsubmit.co/sumitsaha74500@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <Typography variant="h4">CONTACT US </Typography>

            <input type="text" placeholder="Full Name" required name="Full Name" />
            <input type="email" placeholder="Email@gmail.com" required name="Email@gmail.com" />
            <textarea placeholder="Message" required cols="30" rows="10" name="Message"></textarea>
            <Button variant="contained" type="submit">
              Send
            </Button>
          </form>
        ) : (
          <div className="thankYouMessage">
            <Typography variant="h4">Thank you for contacting us!</Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
