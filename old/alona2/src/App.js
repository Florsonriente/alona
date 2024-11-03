import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import AdventIdeas from "./components/AdventIdeas";
import MovieList from "./components/ChristmasMovies";
import ChristmasRecipes from "./components/ChristmasRecipes";
import CustomThoughts from "./components/CustomThoughts";

import SavedItems from "./components/SavedItems";

import Button from "./components/Button";
import SnowEffectButton from "./components/SnowFall";
import Countdown from "./components/CountDown";
import Snowfall from "react-snowfall";


import GlobalStyles from "./components/GlobalStyles";
import { TypographyWrapper, StyledWord } from "./components/StyledTypography";
import "./styles/Grid.css";

import StyledList from "./components/StyledList";


function App() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [savedIdeas, setSavedIdeas] = useState([]);
  const [savedCustomThoughts, setSavedCustomThoughts] = useState([]);

  //Snow background effect
  const [showSnow, setShowSnow] = useState(true);

  // New state to track the total saved items
  const [totalSavedItems, setTotalSavedItems] = useState(0);

  // Update the total saved items count when in click "save ..." in each category 
  useEffect(() => {
    const totalCount =
      savedMovies.length +
      savedRecipes.length +
      savedIdeas.length +
      savedCustomThoughts.length;
    setTotalSavedItems(totalCount);
  }, [savedMovies, savedRecipes, savedIdeas, savedCustomThoughts]);

  return (
    <>
      <GlobalStyles />

      <Router>
        <div
          className="App"
        >
          {showSnow && <Snowfall />}
          <nav>
            <StyledList>
            <Link to="/" className="home-icon">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>

            {/* Calendar icon with total saved items count */}
            <Link
              to="/saved-items"
              className="calendar-icon"
              style={{ position: "relative" }}
            >
              <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
              {totalSavedItems > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    color: "white",
                    padding: "5px 10px",
                    fontSize: "8px",
                  }}
                >
                  {totalSavedItems}
                </span>
              )}
            </Link>

              <StyledList>
                <Link to="/recipespage"  style={{ padding: "0.1em" }}>Recipes</Link>
              </StyledList>
              <StyledList>
                <Link to="/moviespage" style={{ padding: "0.1em" }} >Movies</Link>
              </StyledList>
              <StyledList>
                <Link to="/ideaspage"  style={{ padding: "0.1em" }}>Outdoor</Link>
              </StyledList>
              <StyledList>
                <Link to="/customthoughtspage"  style={{ padding: "0.1em" }} >More</Link>
              </StyledList>
            </StyledList>
          </nav>
          <header className="App-header">

            <SnowEffectButton showSnow={showSnow} setShowSnow={setShowSnow} size="2x"  />
          </header>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="background-grid">
                    {Array.from({ length: 12 }).map((_, index) => (
                      <div key={index} className="grid-item">
                        <div className="image-hover">
                          <img
                            src={`/images/image${index + 1}.jpg`}
                            alt={`Background ${index + 1}`}
                            onError={(e) => {
                              e.target.style.display = "none"; // Hide the image if it fails to load
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <TypographyWrapper>
                    <StyledWord>
                      <Countdown />
                    </StyledWord>
                    <StyledWord>
                      {"Christmas".split("").map((letter, index) => (
                        <React.Fragment key={index}>
                          <span>{letter}</span>
                        </React.Fragment>
                      ))}
                    </StyledWord>
                    <br />
                    <h3>TIME TO PREPARE YOUR OWN ADVENT CALENDAR</h3>

                    <Link to="/recipespage">
                      <Button>Start!</Button>
                    </Link>
                  </TypographyWrapper>
                  <div> </div>
                </>
              }
            />
            <Route
              path="/saved-items"
              element={
                <SavedItems
                  savedMovies={savedMovies}
                  savedRecipes={savedRecipes}
                  savedIdeas={savedIdeas}
                  savedCustomThoughts={savedCustomThoughts}
                />
              }
            />
            <Route
              path="/recipespage"
              element={
                <ChristmasRecipes
                  savedRecipes={savedRecipes}
                  setSavedRecipes={setSavedRecipes}
                />
              }
            />
            <Route
              path="/moviespage"
              element={
                <MovieList
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                />
              }
            />
            <Route
              path="/customthoughtspage"
              element={
                <CustomThoughts
                  savedCustomThoughts={savedCustomThoughts}
                  setSavedCustomThoughts={setSavedCustomThoughts}
                />
              }
            />
            <Route
              path="/ideaspage"
              element={
                <AdventIdeas
                  savedIdeas={savedIdeas}
                  setSavedIdeas={setSavedIdeas}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
