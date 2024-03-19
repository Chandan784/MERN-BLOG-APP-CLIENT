import { useRef, useState } from "react";
import { useEffect } from "react";
import { json, useLocation, useNavigate } from "react-router-dom";


let CreateBlog = () => {


let navigate = useNavigate()
  let titleRef = useRef();
  let descriptionRef = useRef();
  let imageRef = useRef();


     



  function handelFormSubmit(e) {
    e.preventDefault();

    
    let form =document.getElementById('form')
    console.log(form.action);
     
    let title = titleRef.current.value;
    let description = descriptionRef.current.value;
    let image = imageRef.current.value;

    let userId = localStorage.getItem("userId")
    userId = JSON.parse(userId);
    console.log(title);
    let obj = {
      title: title,
      description: description,
      image: image,
      user: userId,
    };

    let jsonObject = JSON.stringify(obj);
    console.log(jsonObject);

    try {
      fetch("/api/v1/blogs/create-blog", {
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
          if(res.sucess == true){
            alert("blog created")
              navigate("/")
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="form-div">
        <form action="" onSubmit={(e) => handelFormSubmit(e)} id="form">
          <input
            type="text"
            id="title"
            name="title"
        
          
            ref={titleRef}
            placeholder="enter title"
          />
          <input
            type="text"
            id="description"
            name="description"
            placeholder="enter description"
            ref={descriptionRef}
          />
          <input
            type="text"
            id="image"
            name="image"
            placeholder=" enter image link"
            ref={imageRef}
          />

          <input type="submit" value="submit" name="submit" id="submit" />
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
