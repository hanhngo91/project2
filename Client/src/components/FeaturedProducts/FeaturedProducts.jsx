import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function FeaturedProducts({ type }) {
  const [data, setData] = useState([]);
  const featured = useSelector((state) => state.productReducer);
  console.log(featured);
  const loadProducts = async () => {
    const products = await axios.get("http://localhost:8000/products");
    let featuredProducts = products.data.filter((e) => e.type == "featured");
    setData(featuredProducts);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>Featured</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          assumenda nostrum aperiam atque inventore nobis laborum quo asperiores
          nesciunt eos error dolorem, illum in culpa sit! Omnis reiciendis
          tempore quas?
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

export default FeaturedProducts;
