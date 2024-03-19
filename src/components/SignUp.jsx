import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { setLogin,setLogout } from "../store/authSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const handelSignup = (e) => {
    e.preventDefault();
    let username = usernameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    
   

//     let jsonObject = JSON.stringify(obj);
// console.log(jsonObject);
    try {
      fetch("/api/v1/users/register", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
            "username":username,
            "email":email,
            "password":password
        }),
      })
        .then((data) => {
          return data.json();
        })
        .then((res) => {

            if(res.sucess == true){
               
                navigate("/")
                localStorage.setItem("userId", JSON.stringify(res.user._id))
                dispatch(setLogin())
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
        <form action="" onSubmit={(e) => handelSignup(e)}>
          <input
            type="text"
            id="username"
            className=""
            name="username"
            ref={usernameRef}
            placeholder="Enter username"
          />

          <input
            type="text"
            id=""
            className=""
            ref={emailRef}
            name="email"
            placeholder="Enter email"
          />

          <input
            type="text"
            id=""
            className=""
            ref={passwordRef}
            name="password"
            placeholder="Enter password"
          />

          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default SignUp;
