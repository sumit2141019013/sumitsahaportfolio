import React, { useEffect } from "react";
import "./Home.css";

import { Typography } from "@mui/material";
import TimeLine from "../timeline/TimeLine";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiExpress,
  SiNodedotjs,
  SiPython,
  SiC,
  // SiJava,
  SiMongodb,
  SiJavascript,
  SiReact,
} from "react-icons/si";
import mypic from "../images/mypic.png";
import java from "../images/java1.jpg";
import html from "../images/html1.jpg";
import react from "../images/react.png";
import mongo from "../images/mongo.png";
import pip from "../images/pip.jpg";
import cImage from "../images/c.jpg";
import cer from "../images/cer.jpg";
import alphacer from "../images/alphacer.png";
import rinex from "../images/rinex.jpg";
import codecombat from "../images/certificatecombat.jpg";
import thrive from "../images/thrive.png";
import dev from "../images/dev.png";
import hack from "../images/hack.png";
import hack1 from "../images/rank.png";
import CertiCard from "../certicard/Certicard";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";

const Home = () => {
  // Manually add data for timeline
  const timelines = [
    {
      date: new Date("2019-03"),
      title: "Matriculation/Tenth - 91%",
      description: "D.A.V public School,Kanyapur",
    },
    {
      date: new Date("2021-03"),
      title: "Senior Secondary - 85%",
      description: "D.A.V public School,Kanyapur",
    },
    {
      date: new Date("2025-07"),
      title: "B.Tech,Computer Science and Engineering - 8.48CGPA",
      description: "ITER,SOA University",
    },
  ];

  // Manually add data for skills
  const skills = {
    image1: { url: java },
    image2: { url: html },
    image3: { url: react },
    image4: { url: mongo },
    image5: { url: pip },
    image6: { url: cImage },
  };

  // Manually add data for certifications
  const youtubes = [
    {
      _id: 1,
      title: "JAVA-Apna College",
      image: { url:  alphacer },
      url: "https://certification1url.com",
    },
    {
      _id: 2,
      title: "Web Development",
      image: { url: cer },
      url: "https://www.appbrewery.co/p/web-development-course-resources",
    },
    {
      _id: 3,
      title: "Pojects And Course, Web Development",
      image: { url:rinex},
      url: "https://rinex.ai/",
    },
    {
      _id: 4,
      title: "Code Combat 3.0",
      image: { url:codecombat},
      url: "https://www.codingninjas.com/",
    },
    {
      _id: 5,
      title: "ThriveDx webinar",
      image: { url:thrive},
      url: "https://thrivedx.com/",
    },
    {
      _id: 6,
      title: "Instagram Clone Bootcamp",
      image: { url:dev},
      url: "https://cert.devtown.in.tech/verify/2c5Mut",
    },
    {
      _id: 7,
      title: "Hackerwar 4.0",
      image: { url:hack},
      url: "https://www.soa.ac.in/iter",
    },
    {
      _id: 8,
      title: "javascript&Css(Basic)",
      image: { url:hack1},
      url: "https://www.hackerrank.com/certificates/2d3be54b5aa6",
    },
  ];

  useEffect(() => {
    return window.addEventListener("scroll", () => {
      const skillsBox = document.getElementById("homeskillsBox");
      if (skillsBox) {
        if (window.scrollY > 1100) {
          skillsBox.style.animationName = "homeskillsBoxAnimationOn";
        } else {
          skillsBox.style.animationName = "homeskillsBoxAnimationOff";
        }
      }
    });
  }, []);

  return (
    <div className="home">
      <div className="row">
        <div className="homeCanvasContainer">
          <Typography variant="h1">
            Sumit <span style={{ color: "white" }}>Saha</span>
          </Typography>
          <Typography variant="h6">
            As a Computer Science and Engineering student, I am passionate about
            turning ideas into code, I thrive on solving complex problems
            through innovative solutions, driving positive change in the tech
            world.{" "}
          </Typography>
          <Link to="/projects">VIEW WORK</Link>
        </div>
        <canvas className="homeCanvas"></canvas>
        <div className="row-r">
          <img src={mypic} alt="server" />
        </div>
      </div>
      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        <Typography variant="h3" style={{ color: "white" }}>
          TIMELINE
        </Typography>
        <TimeLine timelines={timelines} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
          {skills && (
            <>
              <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                <img src={skills.image1.url} alt="Face1" />
              </div>
              <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                <img src={skills.image2.url} alt="Face2" />
              </div>
              <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                <img src={skills.image3.url} alt="Face3" />
              </div>
              <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                <img src={skills.image4.url} alt="Face4" />
              </div>
              <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                <img src={skills.image5.url} alt="Face5" />
              </div>
              <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                <img src={skills.image6.url} alt="Face6" />
              </div>
            </>
          )}
        </div>

        <div className="cubeShadow"></div>

        <div className="homeskillsBox" id="homeskillsBox">
          <SiHtml5 />
          <SiCss3 />
          <SiBootstrap />
          <SiExpress />
          <SiNodedotjs />
          <SiPython />
          <SiC />
          <SiMongodb />
          <SiJavascript />
          <SiReact />
        </div>
      </div>

      <div className="homeCertificate">
        <Typography variant="h3">CERTIFICATIONS</Typography>

        <div className="homeCertificateWrapper">
          {youtubes.map((item) => (
            <CertiCard
              image={item.image.url}
              title={item.title}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
