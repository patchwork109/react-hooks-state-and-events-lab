import React from "react";
import {useState} from "react";

function Item({ name, category }) {

const [isInCart, setIsInCart] = useState(false);

const handleToggleAddToCart = (e) => {
  console.log('added');

    // Changes it to the opposite of what it was
    setIsInCart(isInCart => !isInCart);
}

const appClass = isInCart ? "in-cart" : ""

const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleToggleAddToCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
