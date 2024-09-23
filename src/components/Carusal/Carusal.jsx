import React from 'react'
import Carousel from "react-bootstrap/Carousel";

const Carusal = () => {
    return (
        <div>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="Image/Banner1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="Image/Banner2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="Image/Banner3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carusal