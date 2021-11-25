import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation , useNavigate } from "react-router-dom";
import NavBar from "../NavBar";

const BASE_URL = "http://localhost:5000";

const Blog = () => {
  const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
      const navigate = useNavigate();


  let { pathname } = useLocation();

  const getAllPosts = async () => {
    try {
      const posts = await axios.get(`${BASE_URL}/posts/posts`);
      // console.log(posts.data);
      setPosts(posts.data);
    } catch (err) {
      console.log("getAllPosts error:", err);
    }
  };

  useEffect(() => {
    if (pathname === "/blog") {
      getAllPosts();
    }
  }, []);

  ////// show comments function 
  const handleShowClick = async (e)=> {
    try {
    e.preventDefault();
    const comments = await axios.get(`${BASE_URL}/posts/allcomments`);
    setComments(comments.data);
    } catch(error) {
      console.log("handleShow Error:", error);
    }
  }


  

  return (
    <div>
      <NavBar />
      {posts.map((post, i) => {
        console.log(post);
        return (
          <>
            <div className="designer" key={post._id}>
              {/* <h1 key={post._id}>{post.createdBy.userEmail}</h1> */}
              <h1>{post.title}</h1>
              <span>
                <h3>{post.createdBy.userName}</h3>{" "}
              </span>{" "}
              <img src={post.createdBy.profilePic} />
              <p>{post.artical} </p>
              <img key={i} src={post.media.map((elem) => elem.img1)} />
              <img key={i} src={post.media.map((elem) => elem.img2)} />
              <img key={i} src={post.media.map((elem) => elem.img3)} />
              <input type="submit" value="See More" onClick= {()=> navigate("/post")} />
            </div>
            <div className="project">{/* <img src={post} /> */}</div>
          </>
        );
      })}
    </div>
  );
};

export default Blog;
