import React from "react";
import Card from "../components/Card";

async function Blog() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return (
    <div className="grid grid-cols-4 gap-5 m-12">
      {posts.map((post) => (
        <Card title={post.title} body={post.body} id={post.id} key={post.id}>
          {post.title}
        </Card>
      ))}
    </div>
  );
}

export default Blog;
