import React, { useEffect, useState } from "react";
import axios from 'axios'
import {useSelector,useDispatch} from  'react-redux'
import { Col, Container, Row } from "react-bootstrap";
import { listProducts } from "../actions/productAction";
import ProductScreen from "./ProductScreen";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Massage";
import Ceffect from "../components/Ceffect"; 
import Category from "../components/Category";

const HomeScreen = () => {

const dispatch=useDispatch()
const productList=useSelector((state)=>state.productList);
const {loading,error,products}=productList
useEffect(()=>{
dispatch(listProducts())
},[dispatch])
 


    return (
        <>
        <Category/>
        <Ceffect/>
        <h1 style={{margin:"20px"}}>Top Offers</h1>
        {
            loading ? <Loader/> : error ? <Message>{error} </Message>:
        
            <Container>
                <Row>

                    {
                        products.map((product) => (
                            <Col key={product._id} md={3}>
                                <ProductScreen product={product}/>
                            </Col>
                        ))
                    }

                </Row>
            </Container>
}
        </>
    )
}
export default HomeScreen;