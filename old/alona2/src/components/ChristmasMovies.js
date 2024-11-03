import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './Button';
import CloseButton from './CloseButton';
import StyledList from './StyledList';
import InfoContainer from './InfoContainer';
import StyledListSavedItems from './StyledListSavedItems';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PaginationButton from './PaginationButton';


// TMDb API configuration
const API_KEY = 'edfffb78499bcd6f85acc629a32e9799';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; // Base URL for images

// Function to fetch Christmas movies
async function fetchChristmasMovies() {
  try {
    // Array of search terms
    const queries = ['Christmas', 'polar express', 'home alone', 'holiday', 'new year'];

    let allResults = [];

    // Loop through each search term and make an API request
    for (const query of queries) {
      const response = await axios.get(BASE_URL, {
        params: {
          api_key: API_KEY,
          query: query,
          page: 1,
          include_adult: false,
        }
      });
      allResults = [...allResults, ...response.data.results];
    }

    // Return the combined results
    return allResults;
  } catch (error) {
    console.error('Error fetching Christmas movies:', error);
    return [];
  }
}




// MovieList Component
function MovieList({ savedMovies, setSavedMovies }) {
  const [movies, setMovies] = useState(["Click the Button to get a new Advent Activities idea!"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMovie, setShowMovie] = useState(false);

  useEffect(() => {
    async function loadMovies() {
      const data = await fetchChristmasMovies();
      setMovies(data);
    }
    loadMovies();
  }, []);

  const handleNextMovie = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    setShowMovie(true);
  };

  const saveMovie = () => {
    const currentMovie = movies[currentIndex];
    if (currentMovie && !savedMovies.some(movie => movie.id === currentMovie.id)) {
      setSavedMovies([...savedMovies, currentMovie]);
    }
  };

  const removeMovie = (indexToRemove) => {
    setSavedMovies(savedMovies.filter((_, index) => index !== indexToRemove));
  };

  const currentMovie = movies[currentIndex];

  return (
    
    <InfoContainer>
        <h1>Step 2/4</h1>
      {/* <h1>Christmas Movies Ideas</h1> */}
      <p>Click on the button below  <br></br>to choose and add a Movie <br></br>to your Advent Calender</p>
      <InfoContainer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {showMovie && (
          <>
            <img
              src={currentMovie.poster_path ? `${IMAGE_BASE_URL}${currentMovie.poster_path}` : 'path/to/default-image.jpg'}
              alt={currentMovie.title}
              style={{/*width: '300px',*/  height: '300px', objectFit: 'cover'}}
            />
            <h2>{currentMovie.title}</h2>
            <p>{currentMovie.overview}</p>
          </>
        )}

        <div style={{ margin: '20px' }}>
        <Link to="/recipespage">
                      <PaginationButton style={{ margin: '0 10px' }}>Back</PaginationButton>
                    </Link>
        <Button onClick={handleNextMovie} style={{ margin: '0 10px' }}>
      {showMovie ? 'Another' : 'Show'}
    </Button>
    <Button onClick={saveMovie} disabled={!showMovie} style={{ margin: '0 10px' }}>
      Save
    </Button>
    <Link to="/ideaspage">
                      <PaginationButton  style={{ margin: '0 10px' }}>Next</PaginationButton>
                    </Link>
        </div>
      </InfoContainer>
      
      {savedMovies.length > 0 && (
  <div>
    <h3>Saved Movies:</h3>
    <StyledListSavedItems>
      {savedMovies.map((movie, index) => (
        <StyledList key={index}>
          
            <span>{movie.title}</span>
            {movie.poster_path ? (
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                style={{ maxWidth: '100px', marginLeft: '10px' }}
              />
            ) : (
              <img
                src="https://via.placeholder.com/100" // Fallback image if movie.poster_path is missing
                alt="Placeholder"
                style={{ maxWidth: '100px', marginLeft: '10px' }}
              />
            )}
          
          <CloseButton onClick={() => removeMovie(index)} style={{ marginLeft: '10px' }}>
            X
          </CloseButton>
        </StyledList>
      ))}
    </StyledListSavedItems>
  </div>
)}

    </InfoContainer>
  );
}

export default MovieList;
