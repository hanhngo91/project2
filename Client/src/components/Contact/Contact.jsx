import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

function Contact() {
  return (
    <>
      <img src="/img/FooterBkg.png" style={{ width: "100%" }} />
      <div className="contact">
        <div className="wrapper">
          <span>LET'S KEEP IN TOUCH WITH US:</span>
          <div className="mail">
            <input type="text" placeholder="Enter your email..." />
            <button>Send us</button>
          </div>
          <div className="icons">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <PinterestIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
