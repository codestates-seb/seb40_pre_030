import styled from "styled-components";
import Answer from "./Answer";

const StyledAnswersContainer = styled.div``;

const AnswersContainer = () => {
  return (
    <StyledAnswersContainer className="AnswersContainer">
      <h2 className="answers-container-title">{"2"} Answers</h2>
      <ul className="answers-list">
        <Answer />
        <Answer />
        <Answer />
      </ul>
    </StyledAnswersContainer>
  );
};

export default AnswersContainer;
