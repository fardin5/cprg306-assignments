"use client"

import { useState } from "react"
import Item from "./item"

export default function ItemList({ items, onItemSelect }){
	const [sortBy, setSortBy] = useState("name");
	const itemsList = [...items];

	if(sortBy == "name") itemsList.sort((a, b) => a.name.localeCompare(b.name));
	else if(sortBy == "category") itemsList.sort((a, b) => a.category.localeCompare(b.category));

	const handleSortBy = (event) => setSortBy(event.target.value);

	return(
		<section>
			<div>
				<label>Sort By: </label>
				<button className={`bg-[#1B5299] p-3 rounded m-2 ${sortBy == "name" ? "bg-[#1e5e28fd]" : ""}`} value="name" onClick={handleSortBy}>Name</button>
				<button className={`bg-[#1B5299] p-3 rounded m-2 ${sortBy == "category" ? "bg-[#1e5e28fd]" : ""}`} value="category" onClick={handleSortBy}>Category</button>
			</div>
			<ul className="space-y-5">
				{itemsList.map((item) => (<Item onSelect={() => onItemSelect(item)} key = {item.id} name={item.name} quantity={item.quantity} category={item.category}/>))}
			</ul>
		</section>
	)
}