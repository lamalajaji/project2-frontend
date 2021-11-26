import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./../NavBar";
import "./style.css";

const Home = () => {
  return (
    <div>
      <NavBar />

      <div className="banner">
        <img src="https://i.pinimg.com/originals/e3/34/56/e334569a847af62777d93b4bf408dfa2.jpg" />
      </div>

      <div className="innner">
        <div className="About">
          <h2> We're Here To Help </h2>
          <div className="innerPic">
            {" "}
            <img
              className="pic"
              src="https://www.decorist.com/static/img/optimized/home/img-final-cta@2x.webp"
            />
          </div>
          <p className="paragraph">
            Decorist is an online interior design service that matches you with
            a friendly designers to work with you to pull your home together in
            your style and budget.
          </p>
          <div className="registration">
            {/* <button className="signUp">
              <Link to="/register">Sign Up</Link>
            </button> */}
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="contact">
          <h1>Stay Connected</h1>
          <div className="form">
            <h2>Drop us a message if you have any enquiries.</h2>
            <form>
              <input className="input" type="text" placeholder="Your name" />
              <input className="input" type="email" placeholder="Email" />
              <input
                className="message"
                type="text"
                placeholder="Leave a message:"
              />
              <input className="submit" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
