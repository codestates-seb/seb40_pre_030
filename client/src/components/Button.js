import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.font};
  font-size: 0.7rem;
  border: ${(props) => props.border || "none"};
  border-radius: 3px;
  padding: 0.8em;
`;

export default Button;
