"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name,
      quantity,
      category,
    };
    
    console.log(newItem);
    
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <main>
      <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl text-gray-800 font-bold mb-8">Create New Item</h1>
          <form onSubmit={handleSubmit}>
            <label className="block mb-4">
              <span className="text-gray-800">Item Name:</span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-800">Quantity:</span>
              <input
                type="number"
                min="1"
                max="99"
                required
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-800">Category:</span>
              <select
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
              >
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen">Frozen Foods</option>
                <option value="canned">Canned Goods</option>
                <option value="dry">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
              </select>
            </label>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white"
            >
              Create Item
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
