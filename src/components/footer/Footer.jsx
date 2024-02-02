import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsFacebook, BsInstagram, BsLinkedin,BsPhone} from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  const phoneNumber = "+91 9144256183";
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
        Hello, I'm <b>Sumit Saha,</b>explore my website to learn more about me! Discover who I am and explore my world. Dive in for exciting details! 
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>

      </div>
      <div className="middle_icon">
        <a href="https://github.com/sumit2141019013" >
          <BsGithub />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100036784281994" >
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/_sum_it__saha_?igsh=OGQ5ZDc2ODk2ZA==" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/sumit-saha-2340a3250/" >
          <BsLinkedin />
        </a>
        <a href={`tel:${phoneNumber}`}>
          <BsPhone />
        </a>
        
      </div>
    </div>
  );
};

export default Footer;