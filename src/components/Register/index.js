import React from "react";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router";

const BASE_URL = "http://localhost:5000";

const SignUp = () => {
    const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [userName, setUsersName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //  const [signupMessage, setSignupMessage] = useState("");

  //// local storage to 
//    useEffect(() => {
//      const userStorage = localStorage.getItem("user");
//      setUser(JSON.parse(userStorage));
//    }, []);


  const getUsers = async () => {
    try {
      const res = axios.get(`${BASE_URL}/users/allusers`);
      setUsers((await res).data);
    } catch (error) {
      console.log("getUsers error: ", error);
    }
  };

  const newUser = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(`${BASE_URL}/users/register`, {
        userName: userName,
        email: email,
        password: password,
      });
      getUsers();
    
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
