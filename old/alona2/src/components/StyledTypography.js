// src/components/StyledTypography.js
import styled from 'styled-components';

export const TypographyWrapper = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  
  max-width:100%;
  text-align: center;
  overflow: hidden;

  position: relative;
left: 50%;

transform: translate(-50%, 50%);

`;

export const StyledWord = styled.div`
  font-size: 5rem;
  font-weight: 100;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  color: black;
  display: inline-block;
  
  line-height: 2rem;
  flex-wrap:wrap;

  & span {
    transition: transform 1.3s ease-in-out, color 1.3s ease-in-out;
    display: inline-block;
  }

  & span:hover {
    transform: translateZ(50px) rotate(815deg) scale(0.8);
    color: rgb(119,183,239); /* Change color on hover */
    cursor:pointer;
     font-weight: bold;
  }

  & span:active {
    transform: translateZ(50px) rotate(-65deg) scale(0.75);
    color: rgb(119,183,239); /* Change color on active */
    cursor:pointer;
     font-weight: bold;
  }
`;
