import styled from "styled-components";
import Answer from "./Answer";

const StyledAnswersContainer = styled.div`
  .answers-container-title {
    width: 100%;
    font-size: 1.5em;
    margin-left: 50px;
    padding: 20px;
    border-bottom: 1px solid #e4e6e8;
    font-weight: bold;
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
      </ul>
    </StyledAnswersContainer>
  );
};

export default AnswersContainer;
