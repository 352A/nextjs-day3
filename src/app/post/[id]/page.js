import Card from "@/app/components/Card";
import React from "react";

const Post = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return (
    <div className="w-1/4 mx-auto mt-12">
      <Card id={id} title={post.title} body={post.body}></Card>
    </div>
  );
};

export default Post;
