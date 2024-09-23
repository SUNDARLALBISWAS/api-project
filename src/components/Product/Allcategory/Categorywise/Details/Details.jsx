import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import "./Details.css"

const Details = () => {
  let { id } = useParams();
  console.log(id);
  let api = `https://fakestoreapi.com/products/${id}`
  console.log(api);

  let [state, setState] = useState([])

  const getProduct = () => {
    axios.get(api)
      .then(result => {
        console.log("Result: ", result.data);
        setState(result.data)
      })
      .catch(error => {
        console.log("Axios error", error);
      })
  }

  useEffect(() => (
    getProduct()
  ), [setState, api]);


  return (
    <div>
      {
        <>
          
            <img className='image-in' src={state.image} alt="" />
            <h4>{state.title}</h4>
            <p><b>Price: </b> {state.price}</p>
            <button className='butt'>Shop-Now</button>
            <p>Thank You Guyes!!!</p>
        </>
      }
    </div>
  )
}

export default Details