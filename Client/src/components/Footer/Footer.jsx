import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Footer.scss";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Contact />
      <div className="footer">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <Link className="quickLink" to="/products/bobatea">
              Boba tea
            </Link>
            <Link className="quickLink" to="/products/sparklingtea">
              Sparkling Tea
            </Link>
            <Link className="quickLink" to="/products/specialties">
              Specialties
            </Link>
            <Link className="quickLink" to="/products/extras">
              Extras
            </Link>
          </div>
          <div className="item">
            <h2>Links</h2>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Recruitment</span>
          </div>
          <div className="item">
            <h2>Locations</h2>
            <span>Vietnam</span>
            <span>Japan</span>
            <span>USA</span>
            <span>Australia</span>
          </div>
          <div className="item">
            <h2>Contact Info</h2>
            <span>+0123-456-789</span>
            <span>bubble@hannie.com</span>
            <span>Hanoi, Vietnam - 101000</span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="logo">
              <img src="/img/Hannie bubble logo.png" alt="" />
            </span>
          </div>
          <div className="center">
            <span className="copyright">
              Created by Hannie{" "}
              <FavoriteIcon style={{ fontSize: "16px", color: "#EE227F" }} />{" "}
              Hanh | All rights Reserved |
            </span>
          </div>
          <div className="right">
            <img src="/img/payments.png" alt="payments" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
