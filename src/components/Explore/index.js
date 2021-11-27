import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../NavBar";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

import "./style.scss";

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
                  <MdOutlineAlternateEmail className="eIcon" />:
                  {project.createdBy.userEmail}
                </h2>

                <h2 className="desName" key={project._id}>
                  {project.createdBy.userName}
                </h2>
                <h2 className="phone" key={project._id}>
                  <BsTelephone className="phIcon" />:
                  {project.createdBy.phoneNumber}
                </h2>
              </div>

              <section class="gallery">
                <div class="gallery__item">
                  <input
                    type="radio"
                    id="img-1"
                    checked
                    name="gallery"
                    class="gallery__selector"
                  />
                  <img
                    class="gallery__img"
                    src={project.media.map((img) => img.img1)}
                    alt=""
                  />
                  <label for="img-1" class="gallery__thumb">
                    <img src={project.media.map((img) => img.img1)} alt="" />
                  </label>
                </div>
                <div class="gallery__item">
                  <input
                    type="radio"
                    id="img-2"
                    name="gallery"
                    class="gallery__selector"
                  />
                  <img
                    class="gallery__img"
                    src={project.media.map((img) => img.img2)}
                    alt=""
                  />
                  <label for="img-2" class="gallery__thumb">
                    <img src={project.media.map((img) => img.img2)} alt="" />
                  </label>
                </div>
                <div class="gallery__item">
                  <input
                    type="radio"
                    id="img-3"
                    name="gallery"
                    class="gallery__selector"
                  />
                  <img
                    class="gallery__img"
                    src={project.media.map((img) => img.img3)}
                    alt=""
                  />
                  <label for="img-3" class="gallery__thumb">
                    <img src={project.media.map((img) => img.img3)} alt="" />
                  </label>
                </div>
                <div class="gallery__item">
                  <input
                    type="radio"
                    id="img-4"
                    name="gallery"
                    class="gallery__selector"
                  />
                  <img
                    class="gallery__img"
                    src={project.media.map((img) => img.img4)}
                    alt=""
                  />
                  <label for="img-4" class="gallery__thumb">
                    <img src={project.media.map((img) => img.img4)} alt="" />
                  </label>
                </div>
                <div class="gallery__item">
                  <input
                    type="radio"
                    id="img-3"
                    name="gallery"
                    class="gallery__selector"
                  />
                  <img
                    class="gallery__img"
                    src={project.media.map((img) => img.img5)}
                    alt=""
                  />
                  <label for="img-3" class="gallery__thumb">
                    <img
                      src={`${project.media.map(
                        (img) => img.img5
                      )}1015/150/100.jpg`}
                      alt=""
                    />
                  </label>
                </div>
              </section>
              {/* <div className="project">
                <div className="Box">
                  <img src={project.media.map((img) => img.img1)} />
                </div>
                <div className="Box">
                  <img src={project.media.map((img) => img.img2)} />
                </div>
                <div className="Box">
                  <img src={project.media.map((img) => img.img3)} />
                </div>
                <div className="Box">
                  <img src={project.media.map((img) => img.img4)} />
                </div>
                <div className="Box">
                  <img src={project.media.map((img) => img.img5)} />
                </div>
              </div> */}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
