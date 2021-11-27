import React from "react";
// import Nav from "../Nav";
// import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router";
import { useState} from "react";
// import "./style.css";
const Profile = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setName] = useState("");
//   const [phoneNumber, setPhone] = useState("");
//   const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("user"));
  // useEffect(() => {
  //   ///// Hocks
  //   const userInfo = localStorage.getItem("userInfo");
  //   setEmail(JSON.parse(userInfo));
  //   // if (userInfo) {
  //   //   navigate("/News"); ///// news page
  //   // }
  // }, []);
  /////////////

  const BASE_URL = "http://localhost:5000";

  const SubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(email);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
    //   setLoading(true);
      // const updatedProfile = userInfo.userName._id;
      console.log(userInfo._id);
      const { data } = await axios.put(
        `${BASE_URL}/users/ediprofile/${userInfo._id}`,
        {
          userName,
          email,
          password
          
        },
        config
      );
      console.log(data);
    //   setLoading(false);
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    // <Container>
    <div className="container">
      {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />} */}
      <form className="login" onSubmit={SubmitHandler}>
        <h1>User account</h1>
        <hr />
        <label for="userName">
          <b>User Name :</b>
        </label>
        <input
          type="text"
          value={userName}
          placeholder="Enter User Name"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          value={email}
          placeholder="Enter Email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          name="psw"
          id="psw"
          onChange={(e) => setPassword(e.target.value)}
        />

        <hr />
        <button type="submit">update</button>
      </form>
    </div>
    // </Container>
  );
};
export default Profile;
