import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { base_url, end_point } from '../../../api/api_url';
import { Link } from 'react-router-dom';
import "./Allcategory.css";
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

let imagearr = [
  "Image/Pic1.jpeg",
  "Image/Pic2.jpeg",
  "Image/Pic3.jpeg",
  "Image/Pic4.jpeg",
];

const Allcategory = () => {
  let api = base_url + end_point.category;
  console.log("Api: ", api);

  let [state, setState] = useState([])

  // Using async await
  // const getProduct= async()=>{
  //   let res=await axios.get(api)
  //   console.log(res.data);
  // }
  // getProduct()

  // Using Promise
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

  // Function call
  useEffect(() => {
    getProduct()
  }, [setState, api])

  return (
    <div>
      <section className="py-5">
        <Container>
          <Row>
            {state.map((ele, index) => (
              <Col sm={6} md={4}>
                <Card style={{ width: "18res" }} className="card-space">
                  <Card.Img variant="top" src={imagearr[index % imagearr.length]} alt="Random Image" />
                  <Card.Body>
                    <Card.Title><b>{ele}</b></Card.Title>
                    <Card.Text>{ele}</Card.Text>
                    <Link to={`category/${ele}`}>
                      <Button variant="success">Shoping</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Allcategory