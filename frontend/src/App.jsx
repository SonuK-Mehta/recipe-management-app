import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllRecipes from "./pages/AllRecipes";
import RecipeDetails from "./pages/RecipeDetails";
import DragAndDrop from "./pages/DragAndDrop";
import SubmitRecipe from "./pages/SubmitRecipe";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<AllRecipes />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/meal-plan" element={<DragAndDrop />} />
            <Route path="/add-recipe" element={<SubmitRecipe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
