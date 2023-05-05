import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./AdminNavbar.scss";
import { Link, useNavigate } from "react-router-dom";

function AdminNavbar() {
  let loginStatus = localStorage.getItem("loginStatus");
  const navigate = useNavigate();
  const handleLogoutAdmin = () => {
    localStorage.removeItem("loginStatus");
    navigate("/");
  };
  return (
    <div className="admin-navbar">
      <div className="wrapper">
        {/* ----------------------left------------------------ */}
        <div className="left">
          <Link className="link" to="/">
            <img src="/img/Hannie bubble logo.png" alt="logo" />
          </Link>
        </div>
        {/* ----------------------center---------------------- */}
        <div className="center">
          <div className="item">
            <Link className="link" to="/admin/page">
              Page
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/admin/profit">
              Profit
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/admin/adminproducts">
              Products
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/admin/adminusers">
              Users
            </Link>
          </div>
        </div>
        {/* -----------------------right------------------------- */}
        <div className="right">
          <div className="icons">
            <NotificationsIcon className="notification" />
            <EmailIcon className="letter" />
            {loginStatus ? (
              <>
                <button className="logoutAdmin" onClick={handleLogoutAdmin}>
                  Logout
                </button>
                <span>Hi, {loginStatus}!</span>
              </>
            ) : (
              <PersonIcon className="user" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
