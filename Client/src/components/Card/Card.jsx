import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div>
      <Link className="link" to={`/product/${item.id}`}>
        <div className="card">
          <div className="image-field">
            {item.isNew && <span>New flavor</span>}
            <div className="image">
              <img src={item.img} className="mainImg" />
            </div>
          </div>
          <span>{item.title}</span>
          <div className="prices">
            <span>${item.oldPrice}</span>
            <span>${item.price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
