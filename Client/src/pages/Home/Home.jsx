import "./Home.scss";
import React, { useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import BestSellers from "../../components/BestSellers/BestSellers";
import Categories from "../../components/Categories/Categories";

function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <BestSellers type="bestSellers" />
    </div>
  );
}

export default Home;
