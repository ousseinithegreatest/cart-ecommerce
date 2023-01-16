import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";

export const Shop = () => {
  // console.log(PRODUCTS);
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>My Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product, index) => {
          return <Product key={index} data={product} />;
        })}
      </div>
    </div>
  );
};
