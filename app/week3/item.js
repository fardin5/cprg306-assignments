import React from 'react';

export default function Item({ name, quantity, category }) {
  return (
    <li className="border rounded p-2 m-2">
      <span className="font-bold">{name}</span>
      <span className="mx-2">{quantity}</span>
      <span className="text-gray-500">{category}</span>
    </li>
  );
}
