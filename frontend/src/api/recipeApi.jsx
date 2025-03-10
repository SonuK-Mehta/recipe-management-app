import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

// Fetch all recipes
export const getRecipes = async () => {
  const response = await axios.get(`${API_URL}/api/v1/recipes/get-recipe`);
  return response.data.recipes;
};

// Fetch a specific recipe by ID
export const getRecipeById = async (id) => {
  const response = await axios.get(`${API_URL}/api/v1/recipes/recipe/${id}`);
  return response.data;
};

// Create a new recipe
export const createRecipe = async (recipeData) => {
  await axios.post(`${API_URL}/api/v1/recipes/create-recipe`, recipeData);
};

// Update an existing recipe
export const updateRecipe = async (id, updatedData) => {
  await axios.put(`${API_URL}/api/v1/recipes/update-recipe/${id}`, updatedData);
};

// Search recipes by title
export const searchRecipes = async (query) => {
  const response = await axios.get(`${API_URL}/api/v1/recipes/search/${query}`);
  return response.data.recipes;
};

// Fetch recipes by category
export const getRecipesByCategory = async (category) => {
  const response = await axios.get(
    `${API_URL}/api/v1/recipes/category/${category}`
  );
  return response.data.recipes;
};
