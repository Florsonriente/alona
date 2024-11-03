// MovieListPage.js
import React from 'react';
import MovieList from './components/ChristmasMovies'; 

function MovieListPage({ savedMovies, setSavedMovies }) {
  return (
    <div>
      <h2>Movies</h2>
      <MovieList 
        savedMovies={savedMovies} 
        setSavedMovies={setSavedMovies} 
      />
    </div>
  );
}

export default MovieListPage;
