'use client';
import{ getItems } from "_services/shopping-list-service.js"
import NewItem from "./new-item";
import ItemList from "./item-list";
import { useEffect, useState } from "react";
import Meal from "./meal-ideas";


export default function Page( ){

    const [items, setItems] = useState(itemsData);

    const [selectedItemName, setSelectedItemName] = useState('null');

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
          
    };

    const handleItemSelect = (item) => {
    
    const cleanedItemName = item.replace(/[^a-z\s]+$/i, ' ').trim().split(',')[0].replace(' ', '_');    setSelectedItemName(cleanedItemName);
  };
      
  async function loadItems() {

  }

  useEffect(() => {
    const loadItems = async() => {
        const item = await getItems (params.id);

    };
    loadItems();
  

  }, [])
  
    const {user} = useUserAuth();

    if (!user) {
      alert("Please sign in for your shopping list");
      redirect("/week8/page.js", "replace");

    }
    else {

        return(
            <main className=" flex">

                <NewItem  onAddItem = {handleAddItem}  />
                <ItemList items={items} onItemSelect={handleItemSelect}   />
                <Meal ingredient={selectedItemName} />
            </main>
            
        );

    }

}