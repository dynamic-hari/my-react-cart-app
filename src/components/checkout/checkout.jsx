import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const { getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="shopTitle">
      <h1>
        <strong>Purchase Summary</strong>
      </h1>
      <h3>
        <span>
          <strong>Total Amount Spent: </strong>
        </span>
        ${totalAmount}
      </h3>
      <div className="checkout">
        <button
          onClick={() => {
            checkout();
            navigate("/");
          }}
        >
          BACK TO HOMEPAGE
        </button>
      </div>
    </div>
  );
};
