"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas'; // Import the new MealIdeas component
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null); // Add selectedItemName state

  // Event handler to clean up the item name and update selectedItemName state
  const handleItemSelect = (itemName) => {
    // Clean up the item name by removing size and emojis
    const cleanedItemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();

    // Update selectedItemName state with cleaned item name
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="flex">
      <div className="w-1/2 p-4">
        <h1>Shopping List</h1>
        <NewItem onAddItem={(newItem) => setItems(prevItems => [...prevItems, newItem])} />
        <ItemList items={items} onItemSelect={handleItemSelect} /> {/* Pass onItemSelect prop */}
      </div>
      <div className="w-1/2 p-4">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />} {/* Pass selectedItemName as ingredient */}
      </div>
    </main>
  );
}


