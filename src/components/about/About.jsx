import { Typography } from "@mui/material";
import React from "react";
import "./About.css";
import mypic from "../images/mypic.png";
const About = () => {
  const aboutData = {
    quote:
      "Code fuels innovation; innovation powers the future of computer science.",
    avatar: {
      url: mypic,
    },
    name: "SUMIT SAHA",
    title: "3rd Year, BTech in Computer Science and Engineering",
    subtitle: "ITER, SOA University, Bhubaneswar, Odisha",
    description:
      "A dedicated learner maintaining above 84% throughout my academic journey. Passionate about MERN stack, Python, C, and Java. I love exploring new tech and currently diving into app development. Balancing academic excellence with a zest for continuous learning,I'm building my tech-filled path.Problem solver, collaborative team player, and quick learner with strong adaptability, enhancing efficiency and fostering positive team dynamics.",
  };

  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>{aboutData.quote}</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={mypic} alt="Your Avatar" className="aboutAvatar" />
          <Typography
            variant="h4"
            style={{ margin: " 1vmax 0 ", color: "black" }}
          >
            {aboutData.name}
          </Typography>
          <Typography>{aboutData.title}</Typography>
          <Typography style={{ margin: " 1vmax 0", textAlign: "center" }}>
            {aboutData.subtitle}
          </Typography>
        </div>
        <div>
          <Typography
            style={{
              lineHeight: "1.5rem",
              fontsize:"1.25rem",
              textAlign: "left",
            }}
          >
            <i>{aboutData.description}</i>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
