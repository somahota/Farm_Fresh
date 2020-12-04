import React, { Component } from "react";

//When the user search for a product that isn't available.
const NoResults = () => {
  return (
    <div className="products">
      <div className="no-results">
        <img
          src="https://res.cloudinary.com/soma/image/upload/v1606857841/bare-tree_d6fwcb.png"
          alt="Empty Tree"
        />
        <h2>Sorry, no products matched your search!</h2>
        <p>Enter a different keyword and try.</p>
      </div>
    </div>
  );
};

export default NoResults;
