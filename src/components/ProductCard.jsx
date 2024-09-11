import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ image, name, category, price }) => {
  

  return (
    <Card className="product-card">
      {category && <span className="discount-badge">{category}</span>}
      <Card.Img variant="top" src={`/image/${image}`} />
      <Card.Body>
        
        <Card.Title>{name}</Card.Title>
        <div className="price">
        ${price}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
