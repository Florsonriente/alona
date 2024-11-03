import React, { useState } from 'react';
import Button from './Button';
import CloseButton from './CloseButton';
import StyledList from './StyledList';
import InfoContainer from './InfoContainer';
import StyledListSavedItems from './StyledListSavedItems';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PaginationButton from './PaginationButton';

const adventIdeas = [
  { title: "Sledding Adventure", idea: "Go sledge!", image: "/images/idea1.jpg" },
  { title: "Snowman Fun", idea: "Make a snowman", image: "/images/idea2.jpg" },
  { title: "Outdoor Decoration", idea: "Decorate a tree outdoors", image: "/images/idea3.jpg" },
  { title: "Cozy Time", idea: "Kneet smth cosy", image: "/images/idea4.jpg" },
  { title: "Hot Cocoa", idea: "Make Christmas cacao", image: "/images/idea5.jpg" },
  { title: "Self-Gift", idea: "Prepare a present for yourself!", image: "/images/idea6.jpg" },
  { title: "Winter Walk", idea: "Make a walk in a snow forest", image: "/images/idea7.jpg" },
  { title: "Feed the Reindeer", idea: "Go to feed rentiers", image: "/images/idea8.jpg" },
  { title: "Cookie House", idea: "Build a Christmas cookies house", image: "/images/idea9.jpg" },
  { title: "Swans in Winter", idea: "Go feed the swans in a winter park", image: "/images/idea10.jpg" },
  { title: "Bird Feeder", idea: "Build a birds' feeder house", image: "/images/idea11.jpg" },
  { title: "Christmas Music", idea: "Christams songs music by candles?", image: "/images/idea12.jpg" },
  { title: "Market Visit", idea: "Visit a Christmas market", image: "/images/idea13.jpg" },
  { title: "Handmade Wreath", idea: "Make a hand-made Christmas wreath", image: "/images/idea14.jpg" },
];

function AdventIdeas({ savedIdeas, setSavedIdeas }) {
  const [currentAdventIdea, setCurrentAdventIdea] = useState({
    title: null,
    idea: null,
    image: null,
  });
  const [showIdea, setShowIdea] = useState(false);

  const showAdventIdea = () => {
    const randomIndex = Math.floor(Math.random() * adventIdeas.length);
    setCurrentAdventIdea(adventIdeas[randomIndex]);
    setShowIdea(true);
  };

  const saveAdventIdea = () => {
    if (!savedIdeas.some(saved => saved.idea === currentAdventIdea.idea)) {
      setSavedIdeas([...savedIdeas, currentAdventIdea]);
    }
  };

  const removeAdventIdea = (index) => {
    setSavedIdeas(savedIdeas.filter((_, i) => i !== index));
  };

  return (
    <InfoContainer>
        <h1>Step 3/4</h1>
      {/* <h1>Christmas Activities Ideas</h1> */}
      <p>Click on the button below  <br></br>to choose and add an Activity Idea <br></br>to your Advent Calender</p>
      <InfoContainer>
        <div style={{ marginTop: '20px' }}>
          <h2>{currentAdventIdea.title}</h2> {/* Title displayed here */}
          <p>{currentAdventIdea.idea}</p>
          {currentAdventIdea.image && (
            <img 
              src={currentAdventIdea.image} 
              alt={currentAdventIdea.idea} 
              style={{ width: '300px', height: '300px', objectFit: 'cover' }} 
            />
          )}
        </div>

        <div style={{ marginTop: '20px' }}>
        <Link to="/moviespage">
                      <PaginationButton style={{ margin: '0 10px' }}>Back</PaginationButton>
                    </Link>
          <Button onClick={showAdventIdea} style={{ margin: '0 10px' }}>
            {showIdea ? 'Another' : 'Show'}
          </Button>
          <Button onClick={saveAdventIdea} disabled={!showIdea} style={{ margin: '0 10px' }}>
            Save
          </Button>
          <Link to="/customthoughtspage">
                      <PaginationButton style={{ margin: '0 10px' }}>Next</PaginationButton>
                    </Link>
        </div>
      </InfoContainer>

      {savedIdeas.length > 0 && (
        <InfoContainer style={{ marginTop: '30px' }}>
          <h3>Saved Ideas:</h3>
          <StyledListSavedItems>
            {savedIdeas.map((saved, index) => (
              <StyledList key={index}>
           
                {saved.idea}
                {saved.image && (
                  <img src={saved.image} 
                    alt={saved.idea} 
                    style={{ maxWidth: '100px', marginTop: '10px' }} 
                  />
                )}
                <CloseButton onClick={() => removeAdventIdea(index)} style={{ marginLeft: '10px' }}>
                  X
                </CloseButton>
              </StyledList>
            ))}
          </StyledListSavedItems>
        </InfoContainer>
      )}
    </InfoContainer>
  );
}

export default AdventIdeas;
