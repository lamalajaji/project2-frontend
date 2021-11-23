import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import SignUp from "./components/Register";
import DesignerSignUp from "./components/designerRegister";
import Login from "./components/Login";
import Explore from "./components/Explore";
import Blog from "./components/Blog";
import Home from "./components/Home";
import axios from "axios";


const BASE_URL = "http://localhost:5000";

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/newdesigner" element={<DesignerSignUp />} />

        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="/Profile" element={<Account />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}
export default App;
