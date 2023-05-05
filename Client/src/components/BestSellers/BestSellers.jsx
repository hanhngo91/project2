import React, { useEffect, useState } from "react";
import "./BestSellers.scss";
import Card from "../Card/Card";
import axios from "axios";

function BestSellers({ type }) {
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
  //     id: 2,
  //     img: "/img/BEST SELLER/Brown Modern Milk Boba Drink Best Seller Poster.png",
  //     title: "Milk Boba Tea",
  //     isNew: true,
  //     oldPrice: 10.99,
  //     price: 9.99,
  //   },
  //   {
  //     id: 3,
  //     img: "/img/BEST SELLER/Brown New Boba Milk Tea Promotion Your Story.png",
  //     title: "Premium Iced Boba",
  //     isNew: false,
  //     oldPrice: 12.99,
  //     price: 11.99,
  //   },
  //   {
  //     id: 4,
  //     img: "/img/BEST SELLER/Green Organic Marcha Menu Instagram Stories.png",
  //     title: "Matcha Milk Tea",
  //     isNew: false,
  //     oldPrice: 11.99,
  //     price: 9.99,
  //   },
  // ];

  const [data, setData] = useState([]);
  const loadProducts = async () => {
    const products = await axios.get("http://localhost:8000/products");
    let bestsellers = products.data.filter((e) => e.type == "bestseller");
    setData(bestsellers);
  };
  console.log(data);
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div className="bestSellers">
      <div className="top">
        <h1>Bestsellers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore esse
          illum id ipsam, magni rem non nesciunt hic fugit voluptates deserunt
          dignissimos consequuntur tempora pariatur possimus excepturi.
          Expedita, nobis sint.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
