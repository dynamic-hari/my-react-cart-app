import React from "react";
import { PRODUCTS } from "../../productsList";
import { Product } from "./product";
import "../../styles/shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Hari Haran's Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
