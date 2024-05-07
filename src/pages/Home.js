import React from "react";

import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { ReactTyped } from "react-typed";
import { TypeAnimation } from "react-type-animation";
// import html from '../assets/skills/html.png';
// import css from '../assets/skills/css.png';
// import git from '../assets/skills/git.png';
// import mongo from '../assets/skills/mongo.png';
// import node from '../assets/skills/node.png';
// import react from '../assets/skills/react.png';
import "../styles/Home.css";
import photo from '../assets/myphoto.png';


function Home() {
   return (
    <div className="home">
      <div className="about">   
      <div className="myimage">
       <img src={photo}></img>
      </div>
        <h1> Hi, My Name is Denis</h1>
        <div className="prompt">
        <h2>
        <TypeAnimation
          sequence={[
            `Welcome to my website!\n I'm a DevOps with Backend knoweledges and expirience in QA.`,
            1000,
          ]}
          speed={50}
          style={{ whiteSpace: 'pre-line', fontSize: '1em' }}
          repeat={Infinity}
        />
        </h2>
        <a href="https://twitter.com/Banigoden" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com/denis.bandurin.33" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
        <a href="https://github.com/banigoden" target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/denis--bandurin/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="@Bandurin_Denis" target="_blank" rel="noopener noreferrer">
          <TelegramIcon />
        </a>
        <a href="mailto:banigoden@gmail.com">
          <EmailIcon />
        </a>
        <a href="https://www.instagram.com/denis__bandurin/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        </div>
      </div>
      <div className="aboutme">
      <h1> About me</h1>
      <h3>
      {<TypeAnimation
        sequence={[
        " With nine years of experience in the IT industry, I decided to transition into DevOps. Since the beginning of 2018, I have been actively studying backend and frontend development on my own. I have completed several courses on the JavaRush and Helsinki University platforms, enhancing my skills in these areas. This year, I focused on learning Kubernetes and Docker to strengthen my proficiency in containerization and orchestration. Currently, I am pursuing the AWS course. You can explore my portfolio page, which showcases projects I have developed independently. My passion lies in professional growth as a DevOps with a backend stack, with the ultimate goal of becoming an Architect. Drawing from my experience, I possess a deep understanding of DevOps features and how they can contribute to successful project outcomes."
        ]}
        speed={70}
        style={{ whiteSpace: 'pre-line', fontSize: '1em' }}
        repeat={Infinity}
        />} 
        </h3>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
        <li className="item">
            <h2> DevOps</h2>
            <span>
            AWS Terraform ,Dockerfile, Builds and Network Configuration, 
            Kubernetes ,Linux System Administration 
            Designing a full CI/CD pipeline cycle from build to production deployment 
            </span>
          </li>
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, JS, HTML, CSS 
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
               Spring Framework, MySQL, MongoDB, AWS 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span> Java, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
