import BlogCard from "./BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs,getUserBlogs } from "../store/blogSlise";
import { useEffect, useState } from "react";

let MyBlog = () => {

let [blogs,setBlogs]=useState([])

  let id = localStorage.getItem("userId");

  id = JSON.parse(id);
  console.log(id);

  useEffect(() => {
    fetch(`/api/v1/blogs/user-blog/${id}`)
      .then((data) => data.json())
      .then((res) => {
        console.log(res);

        if (res.sucess == true) {
      setBlogs(res.userBlogs.blog)
        } else {
        }
        // dispatch(getBlog(res.blogs))
        console.log("test");
      });
  }, []);

  return  (
    <>
      <div className="blogs-div">
        {blogs.map((blog) => (
          <BlogCard data={blog} />
        ))}
      </div>
    </>
  );;
};

export default MyBlog;
