import './App.css';
import { Route, Routes } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

// import dotenv from "dotenv";
require("dotenv").config();

const BASE_URL = process.env.BASE_URL;


  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/login">
            <li>login</li>
          </Link>
        </ul>
      </nav>
      
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/Profile" element={<Account />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );


export default App;
