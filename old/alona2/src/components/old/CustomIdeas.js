import React, { useState } from 'react';
import Button from './Button';
import CloseButton from './CloseButton';
import StyledList from './StyledList';
import InfoContainer from './InfoContainer';

const CustomThoughts = ({ savedCustomThoughts, setSavedCustomThoughts }) => {
  const [newThought, setNewThought] = useState("");
  const [showThought, setShowThought] = useState(false);

  const handleAddThought = () => {
    if (!newThought.trim()) return;

    if (!savedCustomThoughts.find(thought => thought.idea === newThought)) { // Updated to use `idea` key
      setSavedCustomThoughts([...savedCustomThoughts, { idea: newThought }]); // Updated to use `idea` key
      setNewThought("");
      setShowThought(true);
    }
  };

  const removeThought = (indexToRemove) => {
    setSavedCustomThoughts(savedCustomThoughts.filter((_, index) => index !== indexToRemove));
  };

  return (
    <InfoContainer>
      <h1>Your Custom Thoughts</h1>
      <InfoContainer>
        <input
          type="text"
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
          placeholder="Write down your thought"
          style={{
            padding: '10px',
            width: 'calc(100% - 22px)',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
        />
        <Button onClick={handleAddThought} style={{ margin: '0 10px' }}>
          Save Your Thought
        </Button>
      </InfoContainer>

      {savedCustomThoughts.length > 0 && (
        <InfoContainer style={{ marginTop: '30px' }}>
          <h3>Saved Thoughts:</h3>
          <StyledList>
            {savedCustomThoughts.map((thought, index) => (
              <StyledList key={index}>
                <p>{thought.idea}</p> {/* Updated to use `idea` key */}
                <CloseButton onClick={() => removeThought(index)} style={{ marginLeft: '10px' }}>
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

export default CustomThoughts;
