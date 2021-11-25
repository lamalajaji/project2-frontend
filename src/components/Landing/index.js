import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Landing = () => {
  return (
    <div>
      <nav>
        <ul>
          <img
            src="https://www.decorist.com/static/finds/product_images/drpl/decorist%20logo.png"
            alt="logo"
          />
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/login">
            <li>login</li>
          </Link>
        </ul>
      </nav>
      <div className="registration">
        <button>
          <Link to="/register">Sign Up</Link>
        </button>
      </div>

      <div className="About">
        <h2> We're Here To Help </h2>
        <p>
          Decorist is an online interior design service that matches you with a
          friendly designers to work with you to pull your home together in your
          style and budget.
        </p>
      </div>

      <div className="contact">
        <h1>Stay Connected</h1>
        <h2>Drop us a message if you have any enquiries.</h2>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Leave a message:" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Landing;
