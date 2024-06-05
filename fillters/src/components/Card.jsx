import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
function Card({ product }) {
  return (
    <div className="card">
      <img src={product.img} alt={product.title} />
      <div className="details">
        <h3 className="card-title">{product.title}</h3>
        <div className="review">
          <AiFillStar className="review-icons" />
          <AiFillStar className="review-icons" />
          <AiFillStar className="review-icons" />
          <AiFillStar className="review-icons" />
          <span>{product.reviews}</span>
        </div>
        <div className="card-price">
          <div className="price">
            <del>${product.prevPrice}</del>${product.newPrice}
          </div>
          <div className="bag">
            <BsFillBagHeartFill className="bag-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
