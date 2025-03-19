import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config.js";
import Container from "../components/container/Container.jsx";
import PostCard from "../components/PostCard.jsx";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (posts.length === 0) {
    <div className="w-full py-8">
      <Container>
        <div className="flex felx-wrap">
          <h1>No post available</h1>
        </div>
      </Container>
    </div>;
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex felx-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
