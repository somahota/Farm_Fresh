import React, { Component } from "react";

const EmptyCart = props => {
  return (
    <div className="empty-cart">
      <img
        src="https://res.cloudinary.com/soma/image/upload/v1606857787/empty-cart_aal5la.png"
        alt="empty-cart"
      />
      <h2>Your cart is empty!</h2>
    </div>
  );
};

export default EmptyCart;
