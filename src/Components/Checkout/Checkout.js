import React from "react";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css"

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/CatPage/Revised/Diet_1500x100._CB1198675309_.jpg"
          alt=""
        ></img>
        <div className="checkout__heading">
            <h2 className="title">Your Shopping Basket Summary</h2>
        </div>
        <div className="checkout_basket">
            {/* <BasketItem /> */}
            {/* <BasketItem /> */}
            {/* <BasketItem /> */}
            {/* <BasketItem /> */}
            {/* <BasketItem /> */}
        </div>
      </div>

      <div className="checkout__right">
          <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
