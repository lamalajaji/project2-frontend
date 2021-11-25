import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";



import React from 'react'

const Post = () => {

    
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
  return <div>post</div>;
}

export default Post
