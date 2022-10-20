import React from "react";
import { Carousel } from "react-bootstrap";

const Ceffect=()=>{
    return(
        <>
         <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/734465a0341787bc.jpg?q=50"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/fcaa98f1342e899a.jpg?q=50"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/6bd47b2bdcdc710c.jpg?q=50"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        </>
    )
}
export default Ceffect;