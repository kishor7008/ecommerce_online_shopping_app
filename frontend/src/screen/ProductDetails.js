import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { Row,Col,ListGroup,Button,Image, ListGroupItem, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { listProductDetails } from "../actions/productAction";
// import {Button} from "react-bootstrap";
import Rating from "../components/Rating";
const ProductDetails=({history,match})=>{
    const [qty,setQty]=useState(1);
    const {id}=useParams()
    const dispatch=useDispatch();
    const productDetails=useSelector((state)=>state.productDetails)
    const{loading,error,product}=productDetails
    const navigate=useNavigate()
    useEffect(()=>{
        dispatch(listProductDetails(id))
    },[dispatch])

    const addToCartHandeler=()=>{
navigate(`/cart/${id}?qty=${qty}`)
    }
    return(
        <>
        <Link to='/' style={{textDecoration:"none",marginTop:'50px'}}><Button variant="success">Back To Home</Button>{' '}</Link>
<Row>
    <Col md={6}>
        <Image src={product.image}/>
        </Col>
    <Col md={3}>
        <ListGroup variant="flush">
       <h3>{product.name}</h3>

        </ListGroup>
        <ListGroup variant="flush">
      
     <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
        </ListGroup>
        <ListGroup variant="flush">
        Price : ${product.price}
    
     
       </ListGroup>
       <ListGroup variant="flush">
      {product.description}
       </ListGroup>
         
         </Col>
    <Col md={3}>
        <ListGroup>
            <Row>
                <Col>Status : </Col>
                <Col>{product.countInStock > 0 ? "In Stack" : 'Out Of Stock'}</Col>
            </Row>
        </ListGroup>
        {
            product.countInStock > 0 && (
                <ListGroupItem>
                    <Row>
                        <Col>QTY</Col>
                        <Form.Control as="select" value={qty} onChange={(e)=>setQty(e.target.value)}>
                    {
                        [...Array(product.countInStock).keys()].map((x)=>(
                            <option key={x+1} value={x+1}>{x+1}</option>
                        ))
                    }
                    </Form.Control>
                    </Row>
                </ListGroupItem>
            )
        }
        <ListGroup>
            <Button className='btn-block' type="button" onClick={addToCartHandeler}>
                Add To Cart</Button>
        </ListGroup>
    </Col>
</Row>
        </>
    )
}
export default ProductDetails;