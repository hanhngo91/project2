import React from "react";
import "./Cart.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DangerousIcon from "@mui/icons-material/Dangerous";
import { useSelector } from "react-redux";

function Cart() {
  // const data = [
  //   {
  //     id: 1,
  //     img: "/img/BEST SELLER/Black Simple Boba Drink Cafe Menu Portait.png",
  //     title: "Sweet Caramel Boba Tea",
  //     isNew: true,
  //     oldPrice: 9.99,
  //     price: 8.99,
  //   },
  //   {
  //     id: 3,
  //     img: "/img/Features/featured3.png",
  //     title: "Sparkling Tea",
  //     isNew: false,
  //     oldPrice: 9.99,
  //     price: 8.99,
  //   },
  // ];
  const products = useSelector((state) => state.cart.products);
  return (
    <div className="cart">
      <h1>Your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h3>{item.title}</h3>
            <span>1 x ${item.price}</span>
          </div>
          <DeleteForeverIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span className="subTitle">Total</span>
        <span className="final">$16.98</span>
      </div>
      <button>Place your order</button>
      <span className="reset">
        <DangerousIcon /> &nbsp; Reset cart
      </span>
    </div>
  );
}

export default Cart;
