import React from "react";
import Box from "@mui/material/Box";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
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
      <Box
          component="img"
          alt="Denis Bandurin"
          src={photo} 
          sx={{
            width: "400px",
            height: "400px", 
            borderRadius: "200px",
            marginBottom: "10px",
          }}
        />
        <h2> Hi, My Name is Denis</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          
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
      <div className="abouts">
      <h1> About me</h1>
      <p>  With seven years of experience in the IT industry, I decided to
      transition into Java programming. I gained my initial IT experience
      in Russia as an administrator from 2015 to 2020 in St. Petersburg.
      During this time, I acquired valuable knowledge working with Unix
      systems and developed small applications for various tasks. I
      further expanded my expertise as a member of the technical staff at
      Oracle, where I contributed to a cloud project by testing networks
      and hard disk drivers. I faced the challenge of working with Python
      instead of Java and successfully adapted to the new language.
      Additionally, I regularly tested drivers with new kernels on different
      virtual machines.
      Since the beginning of 2018, I have been actively studying backend
      and frontend development on my own. I have completed several
      courses on the JavaRush and Helsinki University platforms,
      enhancing my skills in these areas. This year, I focused on learning
      Kubernetes and Docker to strengthen my proficiency in
      containerization and orchestration. Currently, I am pursuing the
      Ultimate AWS Certified Developer Associate 2023 NEW DVA-C02
      online course on Udemy. You can explore my portfolio page, which
      showcases projects I have developed independently.
      My passion lies in professional growth as a Java Developer, both in
      backend and frontend development, with the ultimate goal of
      becoming an Architect. Drawing from my experience as a system
      administrator, I possess a deep understanding of DevOps features
      and how they can contribute to successful project outcomes. I am
      highly motivated to apply my knowledge in challenging projects that
      not only allow me to learn new technologies but also enhance my
      working experience.
      On a personal level, I am peace-minded and patient. Team games
      like volleyball, photography and traveling are among my hobbies.
      </p>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, 
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
               Spring Framework, MySQL, MongoDB, AWS , 
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
