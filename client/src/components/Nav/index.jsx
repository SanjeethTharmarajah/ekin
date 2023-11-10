import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./NavStyles.css";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/orderHistory" className="nav-link">
              Order History&nbsp;&nbsp;
            </Link>
          </li>
          <li className="nav-item">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()} className="nav-link">
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Signup&nbsp;&nbsp;
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="nav-header">
      <h1 className="nav-title">
        <Link to="/" className="nav-link">
          <span role="img" aria-label="shopping bag" ></span>
          EKIN
        </Link>
      </h1>
      <nav>{showNavigation()}</nav>
    </header>
  );
}


export default Nav;
