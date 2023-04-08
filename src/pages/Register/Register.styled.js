import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 20px;
  padding: 5px;
  width: 150px;
  align-self: center;

  background-color: whitecool;
  border: 1px solid;
  border-radius: 5px;

  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    background: white;
  }
`;
