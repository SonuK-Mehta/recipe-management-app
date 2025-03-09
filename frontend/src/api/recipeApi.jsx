import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/recipes";

// Fetch all recipes
export const getRecipes = async () => {
  const response = await axios.get(`${API_URL}/get-recipe`);
  return response.data.recipes;
};

// Fetch a specific recipe by ID
export const getRecipeById = async (id) => {
  const response = await axios.get(`${API_URL}/recipe/${id}`);
  return response.data;
};

// Create a new recipe
export const createRecipe = async (recipeData) => {
  await axios.post(`${API_URL}/create-recipe`, recipeData);
};

// Update an existing recipe
export const updateRecipe = async (id, updatedData) => {
  await axios.put(`${API_URL}/update-recipe/${id}`, updatedData);
};

// Search recipes by title
export const searchRecipes = async (query) => {
  const response = await axios.get(`${API_URL}/search/${query}`);
  return response.data.recipes;
};

// Fetch recipes by category
export const getRecipesByCategory = async (category) => {
  const response = await axios.get(`${API_URL}/category/${category}`);
  return response.data.recipes;
};
