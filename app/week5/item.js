import React from 'react';

export default function Item({ name, quantity, category }) {
  return (
    <li>
      {name}, {quantity}, {category}
    </li>
  );
}
