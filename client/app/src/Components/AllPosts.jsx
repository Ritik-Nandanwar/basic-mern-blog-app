import React, { useEffect, useState } from "react";
import Post from "./Post";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    var data = await fetch("http://localhost:8080");
    var res = await data.json();
    console.log(res);
    setPosts(res);
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <div className="">
        {posts.map((post) => (
          <>
            <Post post={post} />
          </>
        ))}
      </div>
    </>
  );
};

export default AllPosts;
