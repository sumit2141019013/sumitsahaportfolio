import { Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { FaRegSmileWink } from "react-icons/fa";
import proj from "../images/proj.png";

export const ProjectCard = ({ url, projectImage, projectTitle, description, technologies }) => {
  return (
    <a href={url} className="projectCard" target="black">
      <div className="imgset">
        <img src={projectImage} alt="Project" />
        <Typography variant="h5">{projectTitle}</Typography>
      </div>
      <div className="body_about">
        <Typography variant="h4" className="ab_head"> About Project</Typography>
        <Typography>{description}</Typography>
        <Typography variant="h6">Tech Stack: {technologies}</Typography>
      </div>
    </a>
  );
};

const Projects = () => {
  const projectData = [
    {
      id: 1,
      url: "https://vyapaar-saathi.onrender.com/",
      projectImage: proj,
      projectTitle: "Vyapaar Saathi",
      description: "Revolutionize your local shopping experience with the Hawkers and Buyers webapp. Seamlessly connect with nearby hawkers, championing local businesses by giving doorstep service at your needful time. Uncover a mutually beneficial solution for both buyers and hawkers.Buyers will able to connect to the diverse hawkers to know about the current launched items and prices.In turn hawkers will get a big community of buyers to maximise their profit",
      technologies: "MERN Stack",
    },
    
  ];

  return (
    <div className="projects">
      <Typography variant="h4">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projectData.map((item) => (
          <ProjectCard
            key={item.id}
            {...item}
          />
        ))}
      </div>

      <Typography variant="h4" style={{ font: "100 0.55em 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
