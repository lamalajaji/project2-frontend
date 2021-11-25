import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:5000";

const SignUp = () => {
  //   const [users, setUsers] = useState([]);
  const [userName, setUsersName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [user, setUser] = useState(null);
  const navigate = useNavigate();

  //   const getUsers = async () => {
  //     try {
  //       const res = axios.get(`${BASE_URL}/users/allusers`);
  //       setUsers(res.data);
  //     } catch (error) {
  //       console.log("getUsers error: ", error);
  //     }
  //   };
useEffect(() => {
  const userData = localStorage.getItem("user");
  setUser(JSON.parse(userData));
}, []);

  const newUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_URL}/users/register`, {
        userName: userName,
        userEmail: email,
        password: password,
      });

      if (res.data.massage === "Sign Up Successfully") {
        navigate("/");
      }
    } catch (error) {
      console.log("newUser error: ", error);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => newUser(e)}>
        <input
          type="text"
          placeholder="Your name"
          onChange={(e) => setUsersName(e.target.value)}
        />
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default SignUp;
