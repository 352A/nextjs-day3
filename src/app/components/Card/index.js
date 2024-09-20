"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

function Card({ title, body, id, image }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  function handleLike() {
    setLiked(true);
    setLikeCount((prev) => prev + 1);
  }

  return (
    <>
      <div className="border p-9 flex flex-col justify-between shadow-sm rounded-xl">
        <Link href={`/post/${id}`}>
          <Image
            src={image}
            width={500}
            height={300}
            alt="Picture of the author"
            className="my-4 rounded-xl"
          />
          <h4 className="text-2xl ">{title}</h4>
          <hr className="mt-4" />
          <p className="text-zinc-500 mt-4">{body}</p>
        </Link>
        <button
          onClick={handleLike}
          className={`${
            liked ? "bg-rose-700 text-white" : "bg-slate-200"
          } w-28 rounded-3xl py-2 px-4 mt-4 hover:bg-rose-400 active:bg-rose-700 shadow-sm`}
        >
          {liked ? `Liked (${likeCount})` : "Like ♥️"}
        </button>
      </div>
    </>
  );
}

export default Card;
