import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <div className="header">
      <img src="https://www.decorist.com/static/finds/product_images/drpl/decorist%20logo.png" alt="logo"/>
      <ul className="navBar">
        <Link to="/">
          <li className="hame">Home</li>
        </Link>
        <Link to="/explore">
          <li>Explore</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
