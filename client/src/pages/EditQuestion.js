import { Editor } from "@toast-ui/react-editor";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { currentQuestionState } from "../atoms/atoms";
import Button from "../components/Button";
import Markdown from "../components/Markdown";
import Navbar from "../components/navbar/Navbar";
import { ListContent, StyledYellowBox } from "../components/Sidebar/YellowBox";

const StyledEditQuestion = styled.div`
  display: grid;
  grid-template-columns: auto 80%;
  .edit-question-container {
    display: flex;
  }
  .yellow-box-middle {
    font-size: 0.9rem;
    box-sizing: border-box;
    width: 660px;
    height: 6.5rem;
    background-color: #fdf7e2;
    border: #e6cf79 1px solid;
    padding: 1rem;
    margin-bottom: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    line-height: 1.1rem;
    span {
      color: ${(props) => props.theme.blueFont};
    }
  }
  .edit-question-main {
    box-sizing: border-box;
    padding: 1.4rem;
    display: flex;
    flex-direction: column;
    label {
      font-weight: 700;
      margin-bottom: 0.3rem;
    }
    input {
      padding: 0.4rem 0.5rem;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      letter-spacing: 0.5px;
    }
  }
  .toastui-editor-defaultUI {
    width: 660px;
  }
  .editor-content-viewer {
    margin: 0.5rem 0;
    .ReactMarkdown {
      font-size: 0.9rem;
    }
  }
  .edit-buttons {
    width: 160px;
    display: flex;
    justify-content: space-between;
  }
  .Markdown {
    width: 660px;
  }
  .yellow-box-container {
    width: 360px;
  }
  .unordered-list {
    list-style-type: disc;
    font-size: 0.9rem;
    margin: 1.3rem 0 1.3rem 1.8rem;
    li {
      margin-bottom: 0.8rem;
    }
  }
`;

const EditQuestion = ({ article }) => {
  const [AskBody, SetAskBody] = useState("agwergfwaefgaewg");
  const textRef = useRef("");
  const [currentQuestion, setCurrentQuestion] =
    useRecoilState(currentQuestionState);

  const handleChangeInput = () => {
    SetAskBody(textRef.current.getInstance().getMarkdown());
  };

  return (
    <StyledEditQuestion>
      <Navbar />
      <div className="edit-question-container">
        <div className="edit-question-main">
          <div className="yellow-box-middle">
            <p>
              Your edit will be placed in a queue until it is peer reviewed.
            </p>
            <p>
              Attention! Your last edit was rejected. While reasonable edits may
              be rejected for many reasons outside of your control, you should
              <span> review the reasons given for rejecting it </span>
              before continuing.
            </p>
          </div>
          <label>Title</label>
          <input value={currentQuestion.title} />
          <label>Body</label>
          <Editor
            ref={textRef}
            height="300px"
            initialEditType="markdown"
            initialValue={currentQuestion.body}
            onChange={handleChangeInput}
          />
          <div className="editor-content-viewer">
            <Markdown markdown={AskBody} />
          </div>
          <div className="edit-buttons">
            <Button
              bgcolor={(props) => props.theme.buttonBlue}
              font="white"
              border="none"
              fontSize="13px"
            >
              Save edits
            </Button>
            <Button
              bgcolor="white"
              font={(props) => props.theme.buttonBlue}
              border="none"
              fontSize="13px"
            >
              Cancel
            </Button>
          </div>
        </div>
        <div className="yellow-box-container">
          <StyledYellowBox className="SideTop">
            <ul className="Sideul">
              <li className="Sideheader">How to Edit</li>
              <ul className="unordered-list">
                <li>Correct minor typos or mistakes</li>
                <li>Clarify meaning without changing it</li>
                <li>Add related resources or links</li>
                <li>Always respect the author’s intent</li>
                <li>Don’t use edits to reply to the author</li>
              </ul>
            </ul>
          </StyledYellowBox>
        </div>
      </div>
    </StyledEditQuestion>
  );
};

export default EditQuestion;
