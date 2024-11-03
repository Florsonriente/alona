import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  width:100px;

  &:hover {
    background-color: rgb(119, 183, 239);
  }
`;


export default Button;

