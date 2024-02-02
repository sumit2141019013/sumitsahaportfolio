import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../images/mypic2.jpg";
const Header = () => {
  return (
    <ReactNavbar
      navColor1="white"
      navColor2="hsl(0, 61%, 45%)"
      burgerColor="hsl(240, 82%, 10%)"
      burgerColorHover="hsl(0, 41%, 65%)"
      logo={logo}
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      link1ColorHover="white"
      link1Color="hsl(240, 82%, 10%)"
      link1Size="1.5rem"
      link1Padding="3vmax"
      
    />
  );
};

export default Header;
