import React from "react";
import { Typography } from "@mui/material";
import "./Certicard.css"
const CertiCard = ({ title, image, url }) => {
  return (
    <div className="CertiCard">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="CertiCardImage" src={image} alt="Certificate" />
        <Typography className="CertiCardTitle" variant="h5">
          {title}
        </Typography>
      </a>
    </div>
  );
};

export default CertiCard;
