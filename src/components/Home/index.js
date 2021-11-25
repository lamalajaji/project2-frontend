import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./../NavBar";
const Home = () => {
  return (
    <div>
      <NavBar/>
      <div className="registration">
       
        
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

export default Home;
