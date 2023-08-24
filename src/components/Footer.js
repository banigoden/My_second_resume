import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
         <a href="https://www.instagram.com/denis__bandurin/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
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
      </div>
      <p> &copy; 2023 banigoden.github.io</p>
    </div>
  );
}

export default Footer;
