import React from "react";
import { useQuery } from "@tanstack/react-query";

import { useDispatch } from "react-redux";
import { setPost } from "../../redux/slicer/postSlice";
import { getposts } from "../../services/posts";

const Posts = () => {
  const dispatch = useDispatch();
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: getposts,
  });
  dispatch(setPost(data));
  //   console.log(data);
  return (
    <>
      <h1>
        {data?.map((post) => {
          return (
            <div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          );
        })}
      </h1>
    </>
  );
};

export default Posts;
