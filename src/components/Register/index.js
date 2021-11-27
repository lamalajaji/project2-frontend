import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.css";


const BASE_URL = "http://localhost:5000";

const SignUp = () => {
  //   const [users, setUsers] = useState([]);
  const [userName, setUsersName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [user, setUser] = useState(null);
      const [users, setUsers] = useState([]);

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
  getUsers()
}, []);

//////
 const getUsers = async ()=> {
 const res = axios.get(`${BASE_URL}/users/allusers`) 
       setUsers(res.data)
      
}
  const newUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_URL}/users/register`, {
        userName: userName,
        userEmail: email,
        password: password,
      });

      if (res.data.massage === "Sign Up Successfully") {
        navigate("/home");
        localStorage.setItem("user", JSON.stringify(res));
        console.log(res);
        setUsers([...users] , res)
      }
      else { 
        if (password.length < 8){
           Swal.fire({
             icon: "Eroor",
             title: "Oops",
             text: "Weak Password",
           });

        } else if(res.data.userEmail === email){
          Swal.fire({
            icon: "Eroor",
            title: "Oops",
            text: "This Email Already Used",
          });
        }        
      }
    } catch (error) {
      console.log("newUser error: ", error);
    }
  };

  return (
    <div className="register">
      <div className="registerBox">
        <form className="registerForm" onSubmit={(e) => newUser(e)}>
          <h2> Welocme In Decorist </h2>
          <div className="regWrap">
            <span>User Name</span>
            <input
              className="regInp"
              type="text"
              onChange={(e) => setUsersName(e.target.value)}
            />
            <span>Email</span>
            <input
              className="regInp"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Password</span>
            <input
              className="regInp"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input className="regBtn" type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
