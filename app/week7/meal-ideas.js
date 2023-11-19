"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error('Error fetching meal ideas:', error);
    return [];
  }
}

export default function MealIdeas(props) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const ingredient = props.ingredient;
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [props.ingredient]);

  return (
    <div>
      <h2>Meal Ideas for {props.ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}
