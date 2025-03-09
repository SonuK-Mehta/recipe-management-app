import React, { useEffect, useState } from "react";
import { getRecipes } from "../api/recipeApi";

const [recipes, setRecipes] = useState([]);

useEffect(() => {
  // Fetch all recipes on component mount
  const fetchRecipes = async () => {
    const allRecipes = await getRecipes();
    setRecipes(allRecipes);
  };

  fetchRecipes();
}, []);
