import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({items}) {

  console.log(items);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoriesToFilter = items.filter((item) => {
    console.log(item.category);
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory
    }
  })
  
  const handleFilterChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilterChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {categoriesToFilter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
