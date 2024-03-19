import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

let BlogCard = ({ data }) => {
  let navigate = useNavigate();
  function handelEdit() {
    navigate(`/edit-blog/${data._id}`, {
      state: {
        data,
      },
    });
  }
  function handeDelete(id) {
    try {
      fetch(`/api/v1/blogs/delete-blog/${id}`, { method: "delete" })
        .then((data) => data.json())
        .then((res) => {
          console.log(res);

          if (res.sucess == true) {
           alert("blog deleted")
            navigate("/");
          } else {
          }
          // dispatch(getBlog(res.blogs))
          console.log("test");
        });
    } catch (error) {
      console.log(error);
    }

    console.log(id);
  }
  console.log(data);
  return (
    <>
      <div className="blog-card">
        <MdDelete id="delete" onClick={() => handeDelete(data._id)} />
        <FaEdit id="edit" onClick={(e) => handelEdit(data._id)} />
        <h3>{data.user.username} </h3>
        <h4>{data.createdAt}</h4>

        <img src={`${data.image}`} alt="" />
        <h2>{data.title}</h2>
        <h5>{data.description}</h5>
        {/* <button id="redad-more-btn">Read More</button> */}
      </div>
    </>
  );
};

export default BlogCard;
