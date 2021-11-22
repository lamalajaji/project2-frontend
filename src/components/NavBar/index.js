import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <ul>
      <Link to="/">
        <li>Home</li>
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
  );
};

export default NavBar;
