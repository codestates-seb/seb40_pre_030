import styled from "styled-components";
import Answer from "./Answer";
import AnswerCreate from "./AnswerCreate";
const StyledAnswersContainer = styled.div`
  .answers-container-title {
    font-size: 1.5em;
    padding: 20px;
    color: #3d4044;
  }
`;

const AnswersContainer = () => {
  return (
    <StyledAnswersContainer className="AnswersContainer">
      <h2 className="answers-container-title">{"2"} Answers</h2>
      <ul className="answers-list">
        <Answer />
        <Answer />
        <Answer />
        <AnswerCreate />
      </ul>
    </StyledAnswersContainer>
  );
};

export default AnswersContainer;
