import React from 'react';
import AdventIdeas from './components/AdventIdeas'; // Update the import path if needed

function IdeasPage({ savedIdeas, setSavedIdeas }) {
  return (
    <div>
      <h2>Advent Ideas</h2>
      <AdventIdeas 
        savedIdeas={savedIdeas} 
        setSavedIdeas={setSavedIdeas} 
      />
    </div>
  );
}

export default IdeasPage;
