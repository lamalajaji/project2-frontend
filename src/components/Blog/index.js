import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NavBar from "../NavBar";
import Post from "./../Post";

const BASE_URL = "http://localhost:5000";

const Blog = () => {
  const [posts, setPosts] = useState([]);
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

  const handleClick = (_id) => {
    navigate(`/post/${_id}`);
  };

  return (
    <div>
      <NavBar />
      {posts.map((post, i) => {
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
              <input
                type="submit"
                value="See More"
                onClick={() => handleClick(post._id)}
              />
            </div>
            <div className="project">{/* <img src={post} /> */}</div>
          </>
        );
      })}
    </div>
  );
};

export default Blog;
