import React from "react";
import { Route, Routes} from "react-router-dom";
import Landing from "./components/Landing";
import SignUp from "./components/Register";
import Login from "./components/Login";
import Explore from "./components/Explore";
import Blog from "./components/Blog";
import Post from "./components/Post";

import Home from "./components/Home";


function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />

        <Route exact path="/register" element={<SignUp />} />

        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="/Profile" element={<Account />} /> */}
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}
export default App;
