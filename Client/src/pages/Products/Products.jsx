import React, { useState, useEffect } from "react";
import "./Products.scss";
import { useNavigate, useParams } from "react-router-dom";
import List from "../../components/List/List";
import { useSelector, useDispatch } from "react-redux";
import { product, featured } from "../../action";

import axios from "axios";

function Products() {
  const dispatch = useDispatch();
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(10);
  const [sort, setSort] = useState(null);
  const navigate = useNavigate();
  const [toggleCategoryCheckbox, setToggleCategoryCheckbox] = useState("");
  const param = useParams();
  const [productList, setProductList] = useState([]);
  const [displayProductList, setDisplayProductList] = useState([]);
  const a = useSelector((state) => state.productReducer);

  console.log(a);
  const loadProducts = async () => {
    const products = await axios.get("http://localhost:8000/products");
    // setProductList(products.data);

    dispatch(product(products.data));
    // dispatch(featured(products.data));
  };
  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    setToggleCategoryCheckbox(param.id);
    let tempArr = [];
    productList.forEach((val) => {
      if (val.category.toLowerCase().replace(" ", "") === param.id) {
        tempArr.push(val);
      }
    });
    // console.log(tempArr);
    const afterFilterTempArr = tempArr.filter(
      (val) => Number(val.price) <= maxPrice
    );
    setDisplayProductList(afterFilterTempArr);
  }, [param.id, productList, maxPrice]);

  return (
    <div className="products">
      {/* ---------------------------left side------------------------------------------ */}
      <div className="left">
        <div className="filterItem">
          {/* ------------Categories------------------------ */}
          <h2>Categories</h2>
          <div className="inputItem">
            <input
              type="checkbox"
              id="bobatea"
              value={1}
              checked={toggleCategoryCheckbox == "bobatea"}
              onChange={() => {
                navigate("/products/bobatea");
              }}
            />
            <label htmlFor="1">Boba tea</label>
          </div>
          <div className="inputItem">
            <input
              type="checkbox"
              id="sparklingTea"
              value={2}
              checked={toggleCategoryCheckbox == "sparklingtea"}
              onChange={() => {
                navigate("/products/sparklingtea");
              }}
            />
            <label htmlFor="2">Sparkling Tea</label>
          </div>
          <div className="inputItem">
            <input
              type="checkbox"
              id="specialties"
              value={3}
              checked={toggleCategoryCheckbox == "specialties"}
              onChange={() => {
                navigate("/products/specialties");
              }}
            />
            <label htmlFor="3">Specialties</label>
          </div>
          <div className="inputItem">
            <input
              type="checkbox"
              id="extras"
              value={4}
              checked={toggleCategoryCheckbox == "extras"}
              onChange={() => {
                navigate("/products/extras");
              }}
            />
            <label htmlFor="4">Extras</label>
          </div>
        </div>
        {/* -------------------Filter by price--------------------- */}
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={10}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        {/* ----------------------sort by price------------------------- */}
        {/* <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Low to high)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (High to low)</label>
          </div>
        </div> */}
      </div>
      {/* --------------------------right side-------------------------------------- */}
      <div className="right">
        <img className="headImage" src="/img/ProductPage.png" alt="" />
        <List
          displayProductList={displayProductList}
          categoryId={categoryId}
          maxPrice={maxPrice}
          sort={sort}
        />
      </div>
    </div>
  );
}

export default Products;
