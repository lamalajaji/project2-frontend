import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/login">
            <li>login</li>
          </Link>
        </ul>
      </nav>
      home
    </div>
  );
};

export default Home;
