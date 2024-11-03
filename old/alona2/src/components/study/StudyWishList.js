import React, { useState } from 'react';
import Button from './Button';
import CloseButton from './CloseButton';
import StyledList from './StyledList';
import InfoContainer from './InfoContainer';

const ChristmasWishList = ({ savedWishes, setSavedWishes }) => {
  const [newWish, setNewWish] = useState(""); // Manages the input state for new wishes
  const [showWishes, setShowWishes] = useState(false); // Controls the visibility of the wish list

  const handleAddWish = () => {
    if (!newWish.trim()) return; // Prevents adding empty wishes

    if (!savedWishes.find(wish => wish.text === newWish)) { // Avoids duplicate wishes
      setSavedWishes([...savedWishes, { text: newWish }]); // Adds the new wish to the list
      setNewWish(""); // Clears the input field
      setShowWishes(true); // Shows the list if it's not already visible
    }
  };

  const removeWish = (indexToRemove) => {
    setSavedWishes(savedWishes.filter((_, index) => index !== indexToRemove)); // Removes the selected wish
  };

  return (
    <InfoContainer>
      <h1>Christmas Wish List</h1>
      <InfoContainer>
        <input
          type="text"
          value={newWish}
          onChange={(e) => setNewWish(e.target.value)} // Updates the input state on change
          placeholder="Add a wish"
          style={{
            padding: '10px',
            width: 'calc(100% - 22px)',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
        />
        <Button onClick={handleAddWish} style={{ margin: '0 10px' }}>
          Add Wish
        </Button>
      </InfoContainer>

      {savedWishes.length > 0 && ( // Conditional rendering based on the list length
        <InfoContainer style={{ marginTop: '30px' }}>
          <h3>Your Wishes:</h3>
          <StyledList>
            {savedWishes.map((wish, index) => (
              <StyledList key={index}>
                <p>{wish.text}</p> {/* Displays each wish */}
                <CloseButton onClick={() => removeWish(index)} style={{ marginLeft: '10px' }}>
                  X
                </CloseButton>
              </StyledList>
            ))}
          </StyledList>
        </InfoContainer>
      )}
    </InfoContainer>
  );
};

export default ChristmasWishList;
