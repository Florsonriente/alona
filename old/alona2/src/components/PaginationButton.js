// PaginationButton.js
import styled from 'styled-components';

const PaginationButton = styled.button`
  background-color: rgb(119, 183, 239);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  width: 100px; /* Fixed width */
  height: 40px; /* Fixed height */

  &:hover {
    background-color: black; 
  }
`;

export default PaginationButton;
