import React from "react";
import { Card ,Button, Container,Row, Col} from "react-bootstrap";
import CategoryList from "../CategoryList";
const Category=()=>{
    return(
<>
<Container>
  <Row>
    {CategoryList && CategoryList.map((item)=>{
      return(
        <>
        <Col md={1} style={{margin:"10px"}}>
        <Card style={{ width: '6rem',border:"none" ,margin:"5px"}}>
      <Card.Img variant="top" src={item.image}/>
      
      <p classnName="text-center">{item.title}</p>
      
    </Card>
    </Col>
        </>
      )
    })}
    </Row>
    </Container>
</>
    )
}
export default Category;