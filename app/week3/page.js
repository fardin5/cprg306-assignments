import React from 'react';
import ItemList from './item-list';

export default function Page() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}
