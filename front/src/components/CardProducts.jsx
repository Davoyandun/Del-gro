import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";


export default function CardProducts({ image, name,id, price }) {
 
  return (
    <div> 
      <NavLink to={"/home/products/"+id}>

           <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
        
        </Card.Body>
      </Card>
      </NavLink>
   
    </div>
  );
}
