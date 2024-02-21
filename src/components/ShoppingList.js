import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // const itemsToDisplay = items.filter((item) => itemsToDisplay === 'All' || item.category === itemsToDisplay)
  const filteredItems = selectedCategory === 'All' ? items : items.filter(item => item.category === selectedCategory)

  const shoppingListItems = filteredItems.map((item) => <Item key={item.id} {...item} />)

    return (
      <div className="ShoppingList">
      <div className="Filter">    
        <Filter onCategoryChange={setSelectedCategory}/>
      </div>  
        <ul className="Items">
          {shoppingListItems}
        </ul>
      </div>
    );
}

export default ShoppingList;
