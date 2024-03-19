import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
  },
  reducers: {
    getAllBlogs: (state, action) => {
      state.blogs = action.payload
       

    },
    getBlog: (state, action) => {
         
 

    },
    getUserBlogs: (state, action) => {
         
      state.blogs = action.payload
      console.log("getuserblog reducer fired");
 
     },
    updateBlog: (state, action) => {},
    deleteBlog: (state, action) => {},
  },
});

export const {getAllBlogs,getUserBlogs} = blogSlice.actions;

export const blogReducer = blogSlice.reducer;
