import React from 'react';
import { Card } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ProductCard = ({ title, image, price, discountedPrice, discount, rating }) => {
  const renderStars = () => {
    return Array(5).fill(0).map((_, index) => (
      index < rating ? <AiFillStar key={index} color="green" /> : <AiOutlineStar key={index} />
    ));
  };

  return (
    <Card className="product-card">
      {discount && <span className="discount-badge">{discount}</span>}
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <div className="rating">{renderStars()}</div>
        <Card.Title>{title}</Card.Title>
        <div className="price">
          <span className="discounted">${discountedPrice}</span>
          {price !== discountedPrice && <span className="original">${price}</span>}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
