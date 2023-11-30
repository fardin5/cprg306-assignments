
import { useState    } from "react";


export default function NewItem ({onAddItem}){
    
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    


    const handleSubmit = (event) => {
        event.preventDefault();
    
        const item= {
            name, 
            quantity,
            category,
        };

        
        
        onAddItem(item);
    
        
        //alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
       

        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
      };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

        return(
            <main >
                
                <div className=" container  bg-blue-900 content-center  w-80 ">
                    <form className=" p-5 ">
                        <div className=" flex content-center flex-col ">
                            <input className=" p-2 mb-4 "
                                  required
                                placeholder=" item Name"
                                value = {name}
                                onChange={handleNameChange}
                            
                            />

                            <input className="w-1/2 p-2 self-center" 
                                required
                                type="number"
                                min={1}
                                max={99}
                                value={quantity}
                                onChange={handleQuantityChange}                    
                            />

                            

                            <select className="w-1/2 p-2 mt-2 self-center" 
                                value={category}
                                onChange={handleCategoryChange}
                                
                            
                            >
                                <option value="Produce">Produce</option>
                                <option value="Dairy">Dairy</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Meat">Meat</option>
                                <option value="Frozen Foods">Frozen Foods</option>
                                <option value="Canned Goods">Canned Goods</option>
                                <option value="Dry Goods">Dry Goods</option>
                                <option value="Beverages">Beverages</option>
                                <option value="Snacks">Snacks</option>
                                <option value="Household">Household</option>
                                <option value="Other">Other</option>
                            </select>
                            <button 
                                className=" px-3 bg-blue-500 text-white rounded-md mt-4  py-1 hover:bg-yellow-300 "
                                type="submit"
                                onClick={handleSubmit}

                            > 
                                Add
                            </button>
                        </div>


                    </form>
                </div>
            </main>
        )
}