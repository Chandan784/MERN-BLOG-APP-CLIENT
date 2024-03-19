import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

let EditBlog = () => {


  let navigate =  useNavigate()
  let [inputs, setInput] = useState({
    title: "",
    description: "",
    image: "",
  });

  let id = useParams().id;

  function getBlogs() {
    try {
      fetch(`/api/v1/blogs/get-blog/${id}`)
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          setInput({
            title: res.blog.title,
            description: res.blog.description,
            image: res.blog.image,
            user: id,
          });
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  }

  function handelInput(e) {
    setInput((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));

    console.log(inputs);
  }

  useEffect(() => {
    getBlogs();
  }, [id]);

  function handelFormSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    let obj = {
      title: inputs.title,
      description: inputs.description,
      image: inputs.image,
    }

    try {
        fetch(`/api/v1/blogs/update-blog/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
  
          //make sure to serialize your JSON body
          body: JSON.stringify(obj),
        })
          .then((data) => {
            return data.json();
          })
          .then((res) => {
            console.log(res);
            if(res.sucess == true){
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
        <form action="" id="form" onSubmit={handelFormSubmit}>
          <input
            type="text"
            id="title"
            name="title"
            value={inputs.title}
            onChange={(e) => handelInput(e)}
            placeholder="enter title"
          />
          <input
            type="text"
            id="description"
            name="description"
            value={inputs.description}
            onChange={(e) => handelInput(e)}
            placeholder="enter description"
          />
          <input
            type="text"
            id="image"
            name="image"
            value={inputs.image}
            onChange={(e) => handelInput(e)}
            placeholder=" enter image link"
          />

          <input type="submit" value="submit" name="submit" id="submit" />
        </form>
      </div>
    </>
  );
};

export default EditBlog;
