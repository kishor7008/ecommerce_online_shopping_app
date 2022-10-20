import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
const ProductScreen=({product})=>{
    return(
        <>
        <Card className="m-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top"/>
            </Link>
<Card.Body>
<Link to={`/product/${product._id}`}>
                <Card.Title as="div">
                <strong>{product.name}</strong>
                    </Card.Title>
            </Link>
            <Card.Text as="div">
               <Rating value={product.rating} text={`${product.numReviews} reviews`}/>


            </Card.Text>
            <Card.Text as="div">
                <div className="m-3">
                    ${product.price}\
                    {product.numReviews}
                </div>

            </Card.Text>
</Card.Body>
        </Card>
        </>
    )
}
export default ProductScreen;