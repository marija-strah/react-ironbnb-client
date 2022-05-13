import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateApartment.css"

function CreateApartment() {

    const [img, setImg] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);

    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newApt = {
        img: img,
        title: title,
        pricePerDay: price
    }

    axios.post(process.env.REACT_APP_API_URL + "/apartments", newApt)
    .then( response => {
        console.log(response.data)

        navigate("/apartments"); // redirect to apartment list
                // navigate(`/apartments/${response.data._id}`); // redirect to apartment page

                // clear form...
                setTitle("");
                setImg("");
                setPrice("");
    })
    .catch( e => {
        console.log("error submitting apt", e)
    })

  };

  return (
    <section className="CreateApartment">
      <form onSubmit={handleSubmit}>
        <input type="text" name="img" value={img} placeholder="image" onChange={(e) => {setImg(e.target.value);}}/>
        <input type="text" name="title" value={title} placeholder="title" onChange={(e) => {setTitle(e.target.value);}}/>
        <input type="number" name="price" value={price} placeholder="price" onChange={(e) => {setPrice(e.target.value);}}/>
        <button>Submit</button>
      </form>
    </section>
  );
}

export default CreateApartment;
