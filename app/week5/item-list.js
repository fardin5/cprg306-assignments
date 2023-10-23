"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let items = itemsData.map((item) => ({
    ...item,
  }));


  items = items.sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <>
      <div className="text-center">
        <label htmlFor="sortby">Sort by:</label>
        <button onClick={() => setSortBy("name")} className={sortBy === 'name' ? 'bg-blue-500' : 'bg-blue-300'}>Name</button>
        <button onClick={() => setSortBy("category")} className={sortBy === 'category' ? 'bg-blue-500' : 'bg-blue-300'}>Category</button>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {items.length === 0 && <p className="text-center">No items found.</p>}
        {items.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </ul>
    </>
  );
}
