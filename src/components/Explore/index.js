import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {  useLocation } from "react-router-dom";
import NavBar from "../NavBar";

const BASE_URL = "http://localhost:5000";

const Explore = () => {
  const [projects, setProjects] = useState([]);
  let { pathname } = useLocation();

  const getAllProjects = async () => {
    try {
      const project = await axios.get(`${BASE_URL}/posts/projects`);
      // console.log(posts.data);
      setProjects(project.data);
    } catch (err) {
      console.log("getAllProjects error:", err);
    }
  };

  

  useEffect(() => {
    if (pathname === "/explore") {
      getAllProjects();
    }
  }, []);

  return (
    <div>
      <NavBar />
      {projects.map((project) => {
        console.log(project);
        return (
          <>
            <div className="designer">
              {/* <h1 key={project._id}>{project.createdBy.userName}</h1> */}
              <h1 key={project._id}>{project.createdBy.userEmail}</h1>
              <img src={project.createdBy.profilePic} />
            </div>
            <div className="project">
              <img src={project.media} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Explore;
