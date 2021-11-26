import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NavBar from "../NavBar";
import Post from "./../Post";
import "./style.css";


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
    <div className="wrapper">
      {/* <NavBar /> */}
      {posts.map((post, i) => {
        return (
          <>
          
            <div className="inner">
              <div className="post">
                <div className="designer" key={post._id}>
                  {/* <h1 key={post._id}>{post.createdBy.userEmail}</h1> */}
                  <span>
                    <img
                      className="designerPic"
                      src={post.createdBy.profilePic}
                    />
                    <h3 className="writter"> {post.createdBy.userName}</h3>{" "}
                  </span>
                  {/* <p>{post.artical} </p> */}
                </div>
                <div className="container">
                  <h1 className="title">{post.title}</h1>
                  <div className="img">
                    <img
                      className="postPic"
                      key={i}
                      src={post.media.map((elem) => elem.img1)}
                    />
                  </div>
                  <p className="postPart">
                    {" "}
                    {post.post.map((part) => part.part1)}
                  </p>
                  <div className="img">
                    <img
                      className="postPic"
                      key={i}
                      src={post.media.map((elem) => elem.img2)}
                    />
                  </div>
                  <p className="postPart">
                    {" "}
                    {post.post.map((part) => part.part2)}
                  </p>
                  <div className="img">
                    <img
                      className="postPic"
                      key={i}
                      src={post.media.map((elem) => elem.img3)}
                    />
                  </div>
                  <p className="postPart">
                    {" "}
                    {post.post.map((part) => part.part3)}
                  </p>
                </div>
              </div>
            </div>
            {/* <input
                type="submit"
                value="See More"
                onClick={() => handleClick(post._id)}
              /> */}
          </>
        );
      })}
    </div>
  );
};

export default Blog;
