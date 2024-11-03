// Example with Font Awesome

import styled from 'styled-components';

const CloseButton = styled.button`
  background-color: #f44; /* Red background */
  color: white; /* White text */
  border: none;
  border-radius: 100%; /* Circular button */
  width: 40px; /* Button width */
  height: 40px; /* Button height */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px; /* Larger icon size */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #c33; /* Darker red on hover */
    transform: scale(1.1); /* Slightly enlarge on hover */
  }

  &:focus {
    outline: none; /* Remove focus outline */
  }
`;

export default CloseButton;



