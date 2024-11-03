// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Global Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Typography Styles */
  body {
    /*font-family: 'Arial', sans-serif;*/
    //font-family: "Gitalona";
    font-family:cursive;
    line-height: 1.6;
    color: #333;
    display:flex; 
    flex-direction:column;
  

  }
    .App{
  min-Height: 100vh;
  color: "white";
  background-color: darkgray;
}

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #222;
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #444;
    text-align:center;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #555;
  }

   h4 {
    font-size: 1.55rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #555;
    
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: black;
    text-align:center;
  }

  a {
    font-size: 1rem;
    color: #555;
    text-decoration: none;

    
    &:hover {
      text-decoration: underline;
      text-decoration: none;
      color:rgb(119,183,239);
    }
  }

  .App-header{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: ecf5fc;
    z-index:1;
}
   
.icon{
  //  color: rgb(119,183,239);
  color:white;
   font-size: 2em;
}
  .home-icon{
    position: absolute;
    left:1%;
    // color: rgb(119,183,239);
    margin-top: 10px;
    color:white;
  }

  .calendar-icon{
    position: absolute!important;
    right:1%;
    // color: rgb(119,183,239);
    margin-top: 10px;
    color:white;
  }



  /* Add more typography styles as needed */
`;

export default GlobalStyles;
