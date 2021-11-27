import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const BASE_URL = "http://localhost:5000";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  ///// get all users to check if the user exisit or not
  const getAllUsers = async () => {
    const res = await axios.get(`${BASE_URL}/users/allusers`);
    setUsers(res.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const logIn = (e) => {
    e.preventDefault();
    let check = false;
    users.forEach((user) => {
      if (user.userEmail === email && user.password === password) {
        navigate("/home");
        check = true;
      } else {
        Swal.fire({
          icon: "Eroor",
          title: "Can't Login",
          text: "Invalid Email or Password",
        });
      }
    });
    if (check) {
      try {
        localStorage.setItem("user", JSON.stringify({ email }));
      } catch (error) {
        console.log("logIn error: ", error);
      }}
    // } else {
    //   let popUp = Window.open("", "", "width=300 , height= 150");
    //   popUp.document.write(`<h2> Incorrect Email or Password </h2>`);
    //   popUp.focus();
    // }
  };

  return (
    <div className="login">
      <div className="loginBox">
        <form className="loginForm" onSubmit={(e) => logIn(e)}>
          <h2 > Welocme Back </h2>
          <div className="inputWrap">
            <span>Email</span>
            <input
              className="inputs"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Password</span>
            <input
              className="inputs"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input className="button" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
