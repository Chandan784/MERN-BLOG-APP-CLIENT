import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./components/Blog";
import CreateBlog from "./components/CreateBlog";
import { Provider } from "react-redux";

import  {store} from "./store/store";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MyBlog from "./components/MyBlog";
import EditBlog from "./components/EditBlog";

const root = ReactDOM.createRoot(document.getElementById("root"));


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
   path:"/",
   element: <Blog/>
      },
      {
       path:"/create-blog",
       element: <CreateBlog/>
      },
      {
        path:"/login",
        element: <Login/>
       },
       {
        path:"/signup",
        element: <SignUp/>
       },

       {
        path:"/my-blog",
        element:<MyBlog/>
       },
       {
        path:"/edit-blog/:id",
        element:<EditBlog/>
       },
    ],
  },
]);
root.render(
  <React.StrictMode>
      <Provider store={store}>
    <RouterProvider router={routes}>

    
     
    </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
