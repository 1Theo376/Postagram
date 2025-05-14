import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Container } from 'react-bootstrap';
import '../App.css';
import PostList from './PostList';
import SubmitPost from './SubmitPost';
import {getToken} from "../App"

function HomePage({name}) {
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);


  const fetchPosts = async() => {
    fetchUserPosts()
    fetchAllPosts()
  }

  const fetchUserPosts = async () => {
    axios.get("/posts",
     { headers: { Authorization: getToken()} ,
      params: { user: name } })
      .then(res => {
        console.log(res.data)
        setUserPosts(res.data)
      })
      .catch((error) =>{
        console.log('Error', error.message);
      });
  }

  const fetchAllPosts = async () => {
    axios.get("/posts", { headers: { Authorization: getToken()} })
      .then(res => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch((error) =>{
        console.log('Error', error.message);
      });
  }

  useEffect(() => {
    fetchPosts()
  }, []);

  return (
    <Container>
      <SubmitPost updatePost={fetchPosts} />
      <h2>Your publications {name}</h2>
      <PostList posts={userPosts} updatePost={fetchUserPosts} />
      <h2>All publications</h2>
      <PostList posts={posts} updatePost={fetchAllPosts} />
    </Container>
  );
};





export default HomePage