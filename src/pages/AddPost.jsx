import React from "react";
import Container from "../components/container/Container.jsx";
import PostForm from "../components/post-form/PostForm.jsx";

function AddPost() {
  return (
    <div className="py-6">
      <Container>
        <PostForm></PostForm>
      </Container>
    </div>
  );
}

export default AddPost;
