import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import Register from "../Register/Register";

function Navbar() {
  const [openRegister, setOpenRegister] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  let loginStatus = localStorage.getItem("loginStatus");

  const handleLogout = () => {
    localStorage.removeItem("loginStatus");
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        {/* ----------------------left------------------------ */}
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/bobatea">
              Boba Tea
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/sparklingtea">
              Sparkling Tea
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/specialties">
              Specialties
            </Link>
          </div>
        </div>
        {/* ----------------------center---------------------- */}
        <div className="center">
          <Link className="link" to="/">
            <img src="/img/Hannie bubble logo.png" alt="logo" />
          </Link>
        </div>
        {/* -----------------------right------------------------- */}
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
          <div className="icons">
            {loginStatus ? (
              <>
                <button className="logoutBtn" onClick={handleLogout}>
                  Log out
                </button>
                <span>
                  Hi, &nbsp;
                  {loginStatus}!
                </span>
              </>
            ) : (
              <PersonIcon
                className="user"
                onClick={() => setOpenRegister(!openRegister)}
              />
            )}
            <FavoriteIcon className="like" />
            <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {openRegister && <Register />}
      {openCart && <Cart />}
    </div>
  );
}

export default Navbar;
