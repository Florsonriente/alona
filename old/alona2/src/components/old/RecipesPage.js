import React from 'react';
import ChristmasRecipes from './components/ChristmasRecipes'; // Update the import path if needed

function RecipesPage({ savedRecipes, setSavedRecipes }) {
  return (
    <div>
      <h2>Recipes</h2>
      <ChristmasRecipes 
        savedRecipes={savedRecipes} 
        setSavedRecipes={setSavedRecipes} 
      />
    </div>
  );
}

export default RecipesPage;
