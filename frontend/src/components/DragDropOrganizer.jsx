import React, { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

const DragDrop = ({ recipes, setRecipes }) => {
  const [recipeOrder, setRecipeOrder] = useState(recipes);

  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over.id) {
      const activeIndex = recipeOrder.findIndex(
        (recipe) => recipe.id === active.id
      );
      const overIndex = recipeOrder.findIndex(
        (recipe) => recipe.id === over.id
      );

      const newRecipeOrder = [...recipeOrder];
      newRecipeOrder.splice(activeIndex, 1);
      newRecipeOrder.splice(overIndex, 0, recipeOrder[activeIndex]);

      setRecipeOrder(newRecipeOrder);
      setRecipes(newRecipeOrder); // Update parent state
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {recipeOrder.length === 0 ? (
          <div>No recipes available</div> // Handle empty state
        ) : (
          recipeOrder.map((recipe) => (
            <RecipeItem key={recipe.id} recipe={recipe} />
          ))
        )}
      </div>
    </DndContext>
  );
};

const RecipeItem = ({ recipe }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: recipe.id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        padding: "10px",
        margin: "5px",
        border: "1px solid black",
        cursor: "move",
      }}
      {...listeners}
      {...attributes}
    >
      {recipe.title}
    </div>
  );
};

export default DragDrop;
