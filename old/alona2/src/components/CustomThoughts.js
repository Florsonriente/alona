import React, { useState } from 'react';
import Button from './Button';
import CloseButton from './CloseButton';
import StyledList from './StyledList';
import StyledListSavedItems from './StyledListSavedItems';
import InfoContainer from './InfoContainer';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PaginationButton from './PaginationButton';

const randomImages = [
  "/images/imagesforthoughts/image1.jpg",  // Image 1
  "/images/imagesforthoughts/image2.jpg",  // Image 2
  "/images/imagesforthoughts/image3.jpg",  // Image 3
  "/images/imagesforthoughts/image4.jpg",  // Image 4
  "/images/imagesforthoughts/image5.jpg",  // Image 5
  "/images/imagesforthoughts/image6.jpg",  // Image 6
  "/images/imagesforthoughts/image7.jpg",  // Image 7
  "/images/imagesforthoughts/image8.jpg",  // Image 8
];


const CustomThoughts = ({ savedCustomThoughts, setSavedCustomThoughts }) => {
  const [newThought, setNewThought] = useState("I want to do really nothing today");
  //const [newImage, setNewImage] = useState("");
  const [showThought, setShowThought] = useState(false);

  const handleAddThought = () => {
    if (!newThought.trim()) return; // check if thought is empty

    if (!savedCustomThoughts.find(thought => thought.text === newThought)) { // check if duplicate already exists

      // Select a random image from the randomImages array
      const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
      
      setSavedCustomThoughts([...savedCustomThoughts, { text: newThought, image: randomImage/*, image: newImage*/ }]); // update saved thoughts with previous and new thought
      setNewThought("write down smth new"); // the input field is reset to empty
     // setNewImage("");
      setShowThought(true);
    }
  };

   

  const removeThought = (indexToRemove) => {
    setSavedCustomThoughts(savedCustomThoughts.filter((_, index) => index !== indexToRemove));
  }; // It uses filter to return a new array excluding the thought at the indexToRemove. The thought at this index is deleted from savedCustomThoughts.

  return (
    <InfoContainer>
      <h1>Step 4/4</h1>
      {/* <h1>Your own Ideas</h1> */}
      <p>Wite down your own thoughts  <br></br>how one can make <br></br>the advent time more magic</p>
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
          Save
        </Button>
        <Link to="/saved-items"
          style={{
            marginTop: '10px'
                      }}>
                         <Link to="/customthoughtspage">
                      <PaginationButton style={{ margin: '0 10px' }}>Back</PaginationButton>
                    </Link>
                      <PaginationButton style={{ margin: '0 10px' }}>Finish</PaginationButton>
                    </Link>
      </InfoContainer>

      {savedCustomThoughts.length > 0 && (
        <InfoContainer style={{ marginTop: '30px' }}>
          <h3>Saved Thoughts:</h3>
          <StyledListSavedItems>
            {savedCustomThoughts.map((thought, index) => (
              <StyledList key={index}>
                {/* Check if the thought has an image and render it */}
                {/* {thought.image && (
                  <img 
                    src={thought.image} 
                    alt={thought.text} 
                    style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '10px' }} 
                  />
                )} */}

                <p>{thought.text}</p> {/* Updated to use `text` key */}
                                   {/* Render the random image if present */}
                                   {thought.image && (
                  <img 
                    src={thought.image} 
                    alt={thought.text} 
                    style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '10px' }} 
                  />
                )}
                <CloseButton onClick={() => removeThought(index)} style={{ marginLeft: '10px' }}>
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

export default CustomThoughts;
