import styled from "styled-components";
import Question from "./Question";

const StyledQuestionsContainer = styled.div`
  width: 100%;
  .questions-header {
    box-sizing: border-box;
    width: 100%;
    padding-left: 0.8rem;
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
  }
  .board-title {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .questions-nav-wrapper {
    box-sizing: border-box;
    padding-left: 0.8rem;
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
  .questions-filtering-buttons {
    display: flex;
  }
  .questions-nav {
    display: flex;
    border: gray solid 1px;
    border-radius: 0.2rem;
    margin: 0 1rem;
  }
  .questions-tab {
    box-sizing: border-box;
    height: 100%;
    border: none;
    border-right: gray solid 1px;
    align-self: center;
    text-align: center;
    padding: 0.4rem 0.5rem;
    :last-child {
      border-right: none;
    }
  }
`;

const QuestionsContainer = () => {
  return (
    <StyledQuestionsContainer className="QuestionsContainer">
      <div className="questions-header">
        <h1 className="board-title">All Questions</h1>
        <button>Ask Question</button>
      </div>
      <div className="questions-nav-wrapper">
        <div className="questions-count"> {"23,136,393"} questions</div>
        <div className="questions-filtering-buttons">
          <nav className="questions-nav">
            <button className="questions-tab">Newest</button>
            <button className="questions-tab">Active</button>
            <button className="questions-tab">Bounted{"283"}</button>
            <button className="questions-tab">Unanswered</button>
            <button className="questions-tab">More</button>
          </nav>
          <button className="questions-filter-button">filter</button>
        </div>
      </div>
      <ul className="questions-container">
        <Question />
        <Question />
        <Question />
      </ul>
    </StyledQuestionsContainer>
  );
};

export default QuestionsContainer;