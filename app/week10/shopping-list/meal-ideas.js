"use client";
import { useEffect, useState } from "react";

async function fetchMealIdeas ( ingredient ){
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;   
    } catch (error) {
        console.error("Error: ", error);
    }    
}

export default function Meal ({ingredient}){

    const [meals, setMeals] = useState([]);


    async function loadMealIdea(){
        const response = await fetchMealIdeas(ingredient);
        setMeals(await response);
    }


    useEffect(() => {
        loadMealIdea();

    }, [ingredient]);


    return(
        <div className="flex flex-wrap">
        <h2>Meal Ideas</h2>
        {meals === null ? (<p>Select an ingredient to see meal ideas</p>
        ) : (
            <ul>
            {meals.map((meal) => (
                <li key={meal.idMeal}>{meal.strMeal}</li>
            ))}
            </ul>
        )}
        </div>

    
    )
    


}