import { Editor } from "@toast-ui/react-editor";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { currentQuestionState } from "../atoms/atoms";
import Button from "../components/Button";
import Container from "../components/Container";
import Markdown from "../components/Markdown";
import Navbar from "../components/navbar/Navbar";
import { StyledYellowBox } from "../components/Sidebar/YellowBox";
import { BASE_URL } from "../util/api";

const StyledEditQuestion = styled.div`
  display: flex;
  justify-content: center;
  .edit-question-container {
    padding: 1rem 0 0 1rem;
    display: flex;
  }
  .yellow-box-middle {
    font-size: 0.9rem;
    box-sizing: border-box;
    width: 100%;
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
    width: 100%;
    box-sizing: border-box;
    padding-right: 1rem;
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
    max-width: 100%;
    width: 100%;
    .toastui-editor-defaultUI-toolbar {
      button {
        width: 30px;
        height: 30px;
      }
    }
  }
  .editor-content-viewer {
    margin: 0.5rem 0;
    .ReactMarkdown {
      font-size: 0.9rem;
    }
  }
  .edit-buttons {
    width: 160px;
    margin: 1rem 0 2rem 0;
    display: flex;
    justify-content: space-between;
  }
  .Markdown {
    width: 100%;
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
  const [currentQuestion, setCurrentQuestion] =
    useRecoilState(currentQuestionState);
  const [body, setBody] = useState(currentQuestion.body);
  const [title, setTitle] = useState(currentQuestion.title);
  const textRef = useRef("");
  const accessToken = window.localStorage.getItem("accessToken");
  const { boardId } = currentQuestion;
  const navigate = useNavigate();

  useEffect(() => {
    setBody(textRef.current.getInstance().getMarkdown());
  }, []);

  const handleChangeInput = () => {
    setBody(textRef.current.getInstance().getMarkdown());
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onSaveClick = (e) => {
    e.preventDefault();
    axios({
      method: "patch",
      url: `${BASE_URL}${boardId}/edit`,
      data: { title, body },
      headers: {
        "ngrok-skip-browser-warning": "skip",
        authorization: accessToken,
      },
    })
      .then(function (response) {
        navigate(`/question/${boardId}`);
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to edit the text. Please try again");
      });
  };

  return (
    <StyledEditQuestion>
      <Container>
        <Navbar />
        <div className="edit-question-container">
          <div className="edit-question-main">
            <div className="yellow-box-middle">
              <p>
                Your edit will be placed in a queue until it is peer reviewed.
              </p>
              <p>
                Attention! Your last edit was rejected. While reasonable edits
                may be rejected for many reasons outside of your control, you
                should
                <span> review the reasons given for rejecting it </span>
                before continuing.
              </p>
            </div>
            <label>Title</label>
            <input value={title} onChange={onTitleChange} />
            <label>Body</label>
            <Editor
              ref={textRef}
              height="300px"
              initialEditType="markdown"
              initialValue={body}
              onChange={handleChangeInput}
            />
            <div className="editor-content-viewer">
              <Markdown markdown={body} />
            </div>
            <div className="edit-buttons">
              <Button
                onClick={onSaveClick}
                bgcolor={(props) => props.theme.buttonBlue}
                font="white"
                border="none"
                fontSize="13px"
              >
                Save edits
              </Button>
              <Link to={`/question/${boardId}`}>
                <Button
                  bgcolor="white"
                  font={(props) => props.theme.buttonBlue}
                  border="none"
                  fontSize="13px"
                >
                  Cancel
                </Button>
              </Link>
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
                  <li>Always respect the author???s intent</li>
                  <li>Don???t use edits to reply to the author</li>
                </ul>
              </ul>
            </StyledYellowBox>
          </div>
        </div>
      </Container>
    </StyledEditQuestion>
  );
};

export default EditQuestion;
