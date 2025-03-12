import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config.js";
import Container from "../components/container/Container.jsx";
import PostCard from "../components/PostCard.jsx";

function Home() {
  const [posts, setPosts] = useState([]);

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
        <div className="flex felx-wrap">
          <h1>Login to read posts</h1>
        </div>
      </Container>
    </div>
    ) 
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
  )
}

export default Home