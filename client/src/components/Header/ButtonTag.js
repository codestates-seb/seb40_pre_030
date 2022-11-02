import styled from "styled-components";

const ButtonWrap = styled.button`
  background-color: hsl(206, 100%, 52%);
  color: white;
  border: none;
  padding: 0.4rem;
`;

const ButtonTag = ({ name, onClick }) => {
  return <ButtonWrap onClick={onClick}>{name}</ButtonWrap>;
};

export default ButtonTag;
