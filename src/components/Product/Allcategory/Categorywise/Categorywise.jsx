import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { base_url } from '../../../../api/api_url';
import { end_point } from '../../../../api/api_url';
import { useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Categorywise.css";

const Categorywise = () => {
  let { catName } = useParams();
  console.log(catName);
  let api = base_url + end_point.categoryWise + `${catName}`
  console.log(api);

  let [state, setState] = useState([])

  // Fetching the data through promise
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

  // Function Call
  useEffect(() => (
    getProduct()
  ), [setState, api]);

  return (
    <div>
      <section className='py-5'>
        <Container>
          <Row>
            {
              state.map(ele => (
                <Col sm={6} md={4}>
                  <Card style={{ width: "18rem" }} className='card-imag2'>
                    <Card.Img variant='top' src={ele.image} />
                    <Card.Body>
                      <Card.Title>{ele.category}</Card.Title>
                      <Card.Text>{ele.title}</Card.Text>
                      <Link to={`specificprod/${ele.id}`}>
                        <Button variant='success'>Details</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Categorywise