import React, { useState } from "react";

function Item({ name, category }) {

  const [bool, setBool] =  useState(false)

  const cartStatus = bool ? "in-cart" : ""
  const message = bool ? "Remove From Cart" : "Add to Cart"

  function handleClick(){
    setBool(bool => !bool)
  }

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick} >{message}</button>
    </li>
  );
}

export default Item;
