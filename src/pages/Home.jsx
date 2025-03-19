import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config.js";
import authService from "../appwrite/auth.js";
import Container from "../components/container/Container.jsx";
import PostCard from "../components/PostCard.jsx";
import Message from "../components/Message.jsx";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const isUserLoggedIn = useSelector((state) => state.auth.auth);
  
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (posts.length === 0) {
    return (
      <div className="w-full py-8">
        <Container>
          {isUserLoggedIn ? (
            <Message text="No post available!" />
          ) : (
            <Message text="Please login to see the posts" />
          )}
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex felx-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard post {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
