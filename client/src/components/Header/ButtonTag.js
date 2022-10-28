import styled from "styled-components";

const ButtonWrap = styled.button`
  background-color: hsl(206, 100%, 52%);
  color: white;
  border: none;
  padding: 0.4rem;
`;

const ButtonTag = ({ name }) => {
  return <ButtonWrap>{name}</ButtonWrap>;
};

export default ButtonTag;
