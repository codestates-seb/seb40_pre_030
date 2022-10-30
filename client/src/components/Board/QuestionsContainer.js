import styled from "styled-components";
import Button from "../Button";
import Question from "./Question";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownWideShort,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { dummyQuestions } from "./dummyData";
import Pagination from "./Pagination";

const StyledQuestionsContainer = styled.div`
  width: 100%;
  min-width: 40rem;
  .questions-header {
    box-sizing: border-box;
    padding-left: 0.8rem;
    margin: 1.4rem 0 2rem 1rem;
    display: flex;
    justify-content: space-between;
  }
  .board-title {
    font-size: 1.8rem;
    font-weight: 500;
    margin-top: 7px;
  }
  .questions-nav-wrapper {
    box-sizing: border-box;
    padding-left: 0.8rem;
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
  .questions-count {
    font-size: 1.2rem;
    margin-left: 1rem;
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
  .icon {
    margin: 0 5px;
  }
`;

const QuestionsContainer = () => {
  return (
    <StyledQuestionsContainer className="QuestionsContainer">
      <div className="questions-header">
        <h1 className="board-title">All Questions</h1>

        <Link to="/ask">
          <Button
            bgcolor={(props) => props.theme.buttonBlue}
            font="white"
            border="none"
            fontSize="15px"
          >
            Ask Question
          </Button>
        </Link>
      </div>
      <div className="questions-nav-wrapper">
        <div className="questions-count"> {"23,136,393"} questions</div>
        <div className="questions-filtering-buttons">
          <nav className="questions-nav">
            <button className="questions-tab">Newest</button>
            <button className="questions-tab">Active</button>
            <button className="questions-tab">Bounted{"283"}</button>
            <button className="questions-tab">Unanswered</button>
            <button className="questions-tab">
              More
              <FontAwesomeIcon className="icon" icon={faCaretDown} />
            </button>
          </nav>
          <Button
            bgcolor={(props) => props.theme.lightBlueTag}
            font={(props) => props.theme.blueFont}
            border={(props) => {
              return props.theme.blueFont + " solid 1px";
            }}
          >
            <FontAwesomeIcon className="icon" icon={faArrowDownWideShort} />
            Filter
          </Button>
        </div>
      </div>
      <ul className="questions-container">
        {dummyQuestions.map((v, idx) => {
          if (idx <= 20) return <Question key={v.postId} questionItem={v} />;
          return null;
        })}
        <Pagination />
      </ul>
    </StyledQuestionsContainer>
  );
};

export default QuestionsContainer;
