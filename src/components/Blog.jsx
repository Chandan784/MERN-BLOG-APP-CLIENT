import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { UseSelector } from "react-redux";
import { getAllBlogs } from "../store/blogSlise";

let Blog = () => {
  const blogs = useSelector((state) => state.blogReducer.blogs);

  const dispatch = useDispatch();


  let user = localStorage.getItem("userId")

  useEffect(() => {
    fetch("https://mern-blog-7o6nr5lw1-chandan-samantarays-projects.vercel.app/api/v1/blogs/all-blog")
      .then((data) => data.json())
      .then((res) => {
          
          dispatch(getAllBlogs(res.blogs))
           
         
      });
  }, []);

  return  (
    <>
      <div className="blogs-div">
        {blogs.map((blog) => (
          <BlogCard data={blog} localUser={user} />
        ))}
      </div>
    </>
  );
};

export default Blog;
