import React from "react";
import "./List.scss";
import Card from "../Card/Card";

function List({ displayProductList }) {
  return (
    <div className="list">
      {displayProductList?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default List;
