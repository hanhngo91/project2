import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";
import { Rate } from "antd";
import { useDispatch } from "react-redux";

function Product() {
  const [quantity, setQuantity] = useState(1);
  const id = useParams().id;

  return (
    <div className="product">
      <div className="left">
        <div className="image">
          <img src="https://bubbleteashop.com/wp-content/uploads/2022/06/BBTS-PAMPLEMOUSSE-PETILLANT_350x350.png" />
        </div>
      </div>

      <div className="right">
        <div className="title">
          <h1>Sparkling fruit tea</h1>
          <Rate />
        </div>
        <span className="price">$ 8.99</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, ullam
          neque deleniti delectus, eveniet accusantium, provident sapiente
          asperiores ut sit esse nulla atque necessitatibus unde enim quidem
          fuga vel architecto!
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span> {quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <div className="buttons">
          <button className="add">
            <AddShoppingCartIcon /> Add to cart
          </button>
          <button className="favorite">
            <FavoriteIcon /> Add to wish list
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
