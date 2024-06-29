import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CartButton() {
  const {cartItems}=useSelector((state)=>state.cart)
  const bgColorName = cartItems.length === 0 ? "none" : "white";
  const nav=useNavigate()
  const handleCart=()=>{
    nav("/cart")
  }
  return (
    <button
      type="button" onClick={handleCart}
      className="btn btn-outline-success d-md-block mt-3 mt-lg-0"
    >
      <i className="bi bi-cart3"></i>
      <span className="mx-2">Checkout</span>
      <span className={`badge text-success bg-${bgColorName}`}>
        {cartItems.length}
      </span>
    </button>
  );
}

export default CartButton;
