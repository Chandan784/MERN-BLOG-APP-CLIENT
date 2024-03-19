import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../store/authSlice";
const Login = () => {

    const navigate = useNavigate()
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const handelLogin = (e) => {
    e.preventDefault();

    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    const obj = {
      email: email,
      password: password,
    };

    let jsonObject = JSON.stringify(obj);
  

    try {
      fetch("/api/v1/users/login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        //make sure to serialize your JSON body
        body: jsonObject,
      })
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          console.log(res);

          if(res.sucess){
            localStorage.setItem("userId", JSON.stringify(res.user._id))
            dispatch(setLogin())
              alert("login")
             navigate("/")
          }
          else{
            alert(res.message)
          }
      
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-div">
        <form action="" onSubmit={(e) => handelLogin(e)}>
          <input
            type="text"
            id=""
            className=""
            name=""
            ref={emailRef}
            placeholder="Enter email"
          />

          <input
            type="text"
            id=""
            className=""
            ref={passwordRef}
            name=""
            placeholder="Enter password"
          />

          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;
