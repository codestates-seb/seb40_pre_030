import { Link } from "react-router-dom";
import styled from "styled-components";
import AnswerBox from "./AnswerBox";
import Tag from "../tags/Tag";
import { calculateTime } from "./util/calculateTime";

const StyledQuestion = styled.li`
  padding: 1.2rem;
  display: flex;
  border-bottom: lightgray solid 1px;
  :first-child {
    border-top: lightgray solid 1px;
  }
  .question-summary-stats {
    width: 120px;
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.8em;
  }
  .question-summary-stats-item {
    width: 100%;
    height: fit-content;
    font-weight: 500;
    text-align: end;
    color: ${(props) => props.theme.grayFont};
    :first-child {
      color: black;
    }
  }
  .question-content {
    width: 100%;
    margin-left: 0.8rem;
  }
  .toQuestion {
    text-decoration: none;
  }
  .question-content-title {
    font-size: 1.1rem;
    color: ${(props) => props.theme.blueFont};
    font-weight: 500;
    margin-bottom: 0.3rem;
    line-height: 1.2rem;
  }
  .question-content-body {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
  .tags-container {
    margin: 0.5rem 0;
  }
  .user-card-minimal {
    font-size: 13px;
    margin-top: 1em;
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .user-card-minimal-avatar {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
  .user-nickname {
    color: ${(props) => props.theme.blueFont};
    margin-right: 3px;
  }
  .asked-time {
    color: ${(props) => props.theme.grayFont};
  }
`;

const Question = ({ questionItem }) => {
  return (
    <StyledQuestion className="Question">
      <div className="question-summary-stats">
        <p className="question-summary-stats-item">
          {questionItem.votes || 0} votes
        </p>
        <AnswerBox answerCount={questionItem.answers || 0} />
        <div className="question-summary-stats-item">
          {questionItem.views || 0} views
        </div>
      </div>
      <div className="question-content">
        <Link className="toQuestion" to={"/question/" + questionItem.postId}>
          <h2 className="question-content-title">{questionItem.title}</h2>
        </Link>
        <div className="question-content-body">
          {/* 특정 글자수 이상은 말줄임표로 대체 */}
          {questionItem.body}
        </div>
        <div className="tags-container">
          <Tag value="reactjs" />
          <Tag value="reactjs" />
          <Tag value="reactjs" />
          <Tag value="reactjs" />
        </div>
        <div className="user-card-minimal">
          <img
            className="user-card-minimal-avatar"
            src={questionItem.photoURL}
            alt=""
          />
          <div className="user-nickname">{questionItem.nickName}</div>
          <div className="asked-time">
            asked {calculateTime(questionItem.createdAt)}
          </div>
        </div>
      </div>
    </StyledQuestion>
  );
};

export default Question;
