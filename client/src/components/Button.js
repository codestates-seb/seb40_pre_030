import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.font};
  font-size: ${(props) => props.fontSize || "0.7rem"};
  border: ${(props) => props.border || "none"};
  border-radius: 3px;
  padding: 0.8em;
  height: fit-content;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
`;

export default Button;
