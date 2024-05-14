import styled from "styled-components";

// export const StyledButton = styled.button``

export const Button = styled.button`
  width: 100px;
  color: black;
  border: none;
  height: 30px;
  cursor: pointer;
  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `background-color: blue; color: white`;
      case "secondary":
        return `background-color: green`;
      case "delete":
        return `background-color: red`;
      case "none":
        return `border: 1px solid black`;
      default:
        return `background-color: red`;
    }
  }}
`;
