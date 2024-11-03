import React from 'react';
import CustomThoughts from './components/CustomThoughts'; // Update the import path if needed

function CustomThoughtsPage({ savedCustomThoughts, setSavedCustomThoughts }) {
  return (
    <div>
      <h2>Custom Thoughts</h2>
      <CustomThoughts 
        savedCustomThoughts={savedCustomThoughts} 
        setSavedCustomThoughts={setSavedCustomThoughts} 
      />
    </div>
  );
}

export default CustomThoughtsPage;

