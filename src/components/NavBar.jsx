import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../store/authSlice";
const NavBar = ({ user }) => {
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  function handelLogout() {
    dispatch(setLogout());
    localStorage.removeItem("userId");

    navigate("/");
  }

  console.log(isLogin);
  return (
    <>
      <div className="navbar">
        <div>
          <h2>Blog App</h2>
        </div>

        <div className="middle">
          <Link to="/">Blogs</Link>
          {isLogin ? (
            <>
              <Link to="/my-blog">My Blogs</Link>
              <Link to="/create-blog">Create Blog</Link>
            </>
          ) : null}
        </div>

        <div className="right">
          {isLogin ? (
            <Link to="/" onClick={handelLogout}>
              Logout
            </Link>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
