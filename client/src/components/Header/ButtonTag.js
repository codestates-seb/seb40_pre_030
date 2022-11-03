import styled from "styled-components";

const ButtonWrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 60px;
  height: 35px;
  color: white;
  border: solid 1px;
  border-radius: 3px;
  border-color: hsl(206, 100%, 52%);
  background-color: hsl(206, 100%, 52%);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  :hover {
    background-color: hsl(206, 100%, 40%);
  }
  .signtxt {
    color: white;
  }
`;

const ButtonTag = ({ name, onClick }) => {
  return <ButtonWrap onClick={onClick}>{name}</ButtonWrap>;
};

export default ButtonTag;
