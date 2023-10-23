import NewItem from './new-item';

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-4">Add New Item</h1>
      <NewItem />
    </div>
  );
}
