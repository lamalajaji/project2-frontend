import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  });

  const logIn = (e) => {
    e.preventDefault();
    let check = false;
    users.find((user) => {
      if (user.userEmail === email && user.password === password) {
        navigate("/");
        check = true;
      }
    });
    if (check) {
      try {
        localStorage.setItem("user", JSON.stringify({ email }));
      } catch (error) {
        console.log("logIn error: ", error);
      }
    } else {
      let popUp = Window.open("", "", "width=300 , height= 150");
      popUp.document.write(`<h2> Incorrect Email or Password </h2>`);
      popUp.focus();
    }
  };

  return (
    <div>
      <form onSubmit={(e) => logIn(e)}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
