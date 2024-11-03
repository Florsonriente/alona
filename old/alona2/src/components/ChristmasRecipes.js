import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './Button';
import CloseButton from './CloseButton';
import StyledList from './StyledList';
import InfoContainer from './InfoContainer';
import StyledListSavedItems from './StyledListSavedItems';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PaginationButton from './PaginationButton';



const ChristmasRecipes = ({ savedRecipes, setSavedRecipes }) => {
  const [recipes, setRecipes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showRecipe, setShowRecipe] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://api.edamam.com/search', {
          params: {
            q: 'christmas',
            app_id: '49313ae4',
            app_key: '251a626fc4e8477968b722771878486d',
          },
        });
        setRecipes(response.data.hits);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleNextRecipe = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recipes.length);
    setShowRecipe(true);
  };

  const saveRecipe = () => {
    const currentRecipe = recipes[currentIndex].recipe;
    if (currentRecipe && !savedRecipes.some(recipe => recipe.uri === currentRecipe.uri)) {
      setSavedRecipes([...savedRecipes, currentRecipe]);
    }
  };

  const removeRecipe = (indexToRemove) => {
    setSavedRecipes(savedRecipes.filter((_, index) => index !== indexToRemove));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading recipes!</p>;

  const currentRecipe = recipes[currentIndex]?.recipe;

  return (
    <InfoContainer>
       <h1>Step 1/4</h1>
      {/* <h1>Christmas Recipes Ideas</h1> */}
      <p>Click on the button below  <br></br>to choose and add a recipee <br></br>to your Advent Calender</p>
      <InfoContainer>
        {showRecipe && currentRecipe && (
          <>
            <img
              src={currentRecipe.image}
              alt={currentRecipe.label}
              style={{ width: '300px', height: '300px', objectFit: 'cover' }}
            />
            <h2>{currentRecipe.label}</h2>
            <p>Source: {currentRecipe.source}</p>
            <a href={currentRecipe.url} target="_blank" rel="noopener noreferrer">
              View Full Recipe
            </a>
          </>
        )}

        <div style={{ marginTop: '20px' }}>
          <Button onClick={handleNextRecipe} style={{ margin: '0 10px' }}>
            {showRecipe ? 'Another' : 'Show'}
          </Button>
          <Button onClick={saveRecipe} disabled={!showRecipe} style={{ margin: '0 10px' }}>
            Save 
          </Button>
          <Link to="/moviespage">
                      <PaginationButton style={{ margin: '0 10px' }}>Next</PaginationButton>
                    </Link>
        </div>
      </InfoContainer>

      {savedRecipes.length > 0 && (
        <InfoContainer className="saved-recipes" style={{ marginTop: '30px' }}>
          <h3>Saved Recipes:</h3>
          <StyledListSavedItems>
            {savedRecipes.map((recipe, index) => (
              <StyledList key={index}>
                <p>{recipe.label}</p> {/* No link on the text, just plain text */}
                {recipe.image && (
                  <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={recipe.image}
                      alt={recipe.label}
                      style={{ maxWidth: '100px', marginTop: '10px' }}
                    />
                  </a>
                )}
                <CloseButton onClick={() => removeRecipe(index)} style={{ marginLeft: '10px' }}>
                  X
                </CloseButton>
              </StyledList>
            ))}
          </StyledListSavedItems>
        </InfoContainer>
      )}
    </InfoContainer>
  );
};

export default ChristmasRecipes;
