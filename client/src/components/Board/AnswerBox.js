import styled from "styled-components";

const StyledP = styled.p`
  width: fit-content;
  border: ${(props) => props.theme.selectedGreenTag} solid 1px;
  border-radius: 3px;
  padding: 2px 3px;
`;

const AnswerBox = ({ answerCount }) => {
  return (
    <StyledP>
      {answerCount} {answerCount === 1 ? "answer" : "answers"}
    </StyledP>
  );
};

export default AnswerBox;
