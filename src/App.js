import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {

  
  let user = localStorage.getItem("userId")
  useEffect(() => {
    fetch("https://mern-blog-7o6nr5lw1-chandan-samantarays-projects.vercel.app/api/v1/users/all-users",{mode:'no-cors'})
      .then((data) => data.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <>
      <NavBar  user={user} />
      <Outlet />
    </>
  );
}

export default App;
