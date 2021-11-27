import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../NavBar";
import "./style.css";

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
    <div className="wrapper">
      <NavBar />
      <div className="explore">
        {/* <div className="content"> </div> */}
        {projects.map((project) => {
          // console.log(project);

          return (
            <>
              <div className="designerInfo">
                <img src={project.createdBy.profilePic} />
                <h2 className="desEmail" key={project._id}>
                  {project.createdBy.userEmail}
                </h2>
                <h2 className="desName" key={project._id}>
                  {project.createdBy.userName}
                </h2>

                <h2 className="phone" key={project._id}>
                  {project.createdBy.phoneNumber}
                </h2>
              </div>
              <div className="project">
                <img src={project.media.map((img) => img.img1)} />
                <img src={project.media.map((img) => img.img2)} />
                <img src={project.media.map((img) => img.img3)} />
                <img src={project.media.map((img) => img.img4)} />
                <img src={project.media.map((img) => img.img5)} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
