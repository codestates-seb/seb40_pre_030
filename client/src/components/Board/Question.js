import styled from "styled-components";
import Tag from "./Tag";

const StyledQuestion = styled.li`
  padding: 0.8rem;
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
    gap: 0.3em;
  }
  .question-summary-stats-item {
    width: 100%;
    height: fit-content;
    text-align: end;
  }
  .question-content {
    margin-left: 0.8rem;
  }
  .tags-container {
    margin: 0.5rem 0;
  }
  .user-card-minimal {
    margin-top: 1em;
    display: flex;
    justify-content: end;
  }
  .user-card-minimal-avatar {
    width: 16px;
  }
`;

const Question = ({ key }) => {
  return (
    <StyledQuestion className="Question" key={key}>
      <div className="question-summary-stats">
        <p className="question-summary-stats-item">{"0"} votes</p>
        <p className="question-summary-stats-item">{"0"} answers</p>
        <div className="question-summary-stats-item">{"3"} votes</div>
      </div>
      <div className="question-content">
        <h2 className="question-content-title">
          {"A class pointer does not name a type"}
        </h2>
        <div className="question-content-body">
          {/* 특정 글자수 이상은 말줄임표로 대체 */}
          {
            'I have 3 C++ files: Main.cpp #include "FileA.h" FileA.h #include "FileB.h" class FileA{ private: FileB* b; }; FileB.h class FileB{ private: FileA* A; ...'
          }
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
            src="https://i.stack.imgur.com/56OT9.jpg?s=32&g=1"
            alt=""
          />
          <div>
            {"Kyle G"} asked {"2 mins ago"}
          </div>
        </div>
      </div>
    </StyledQuestion>
  );
};

export default Question;
