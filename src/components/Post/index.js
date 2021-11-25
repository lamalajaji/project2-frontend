import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";

const BASE_URL = "http://localhost:5000";

const Post = () => {
  const [comments, setComments] = useState([]);
  const [thePost, setPost] = useState(null);
  const { id } = useParams();

  /////

  useEffect(() => {
    if (id) {
      getPost();
    }
  }, []);

  const getPost = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/posts/post/${id}`);
      setPost(res.data);
      console.log("post", res.data);
    } catch (error) {
      console.log("cannot add", error);
    }
  };

  ////// show comments function
  const handleShowClick = async (e) => {
    try {
      e.preventDefault();
      const comments = await axios.get(`${BASE_URL}/posts/allcomments`);
      setComments(comments.data);
    } catch (error) {
      console.log("handleShow Error:", error);
    }
  };

  /////// Add comments function
  const addComment = async (e) => {
    try {
      e.preventDefault();
      const comment = await axios.post(`${BASE_URL}/posts/addcomment`);
      setComments(...comments, comment);
    } catch (error) {
      console.log("addComment Error:", error);
    }
  };
  console.log(thePost);
  return (
    <div>
      <NavBar />
      {thePost && (
        <>
          {" "}
          <h1> {thePost.title} </h1>{" "}
          {thePost.comments.map((item) => (
            ///////// i can send the comment as a props to comments component
            <p>{item.comment}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default Post;
