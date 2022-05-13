import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./ApartmentsList.css"

function ApartmentsList() {

    const [ apartments, setApartments ] = useState([]);

    useEffect( () => {
        axios.get("https://ironbnb-m3.herokuapp.com/apartments")
        .then( response => {
            setApartments(response.data);
        })
        .catch(e => console.log("error getting apartments from API", e))
    }, [])

    return (
        <section className="ApartmentsList">
        <h1>Apartments List</h1>

        {apartments.map((element) => {
          return (
            <div className="apartment-summary">

              <h3>{element.title}</h3>

              <img src={element.img} alt={element.title} />

              Price: {element.pricePerDay} <br />

              <button>More details</button>

            </div>
          );
        })}
      </section>
    );
  }
  

export default ApartmentsList