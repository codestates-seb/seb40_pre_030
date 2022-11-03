import styled from "styled-components";
import Answer from "./Answer";
import AnswerCreate from "./AnswerCreate";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../util/api";

import Markdown from "../Markdown";
import UserCard from "../UserCard";
import Vote from "../Vote";
import Tag from "../tags/Tag";
import { useNavigate, useParams } from "react-router";
import Bubble from "../Article/Bubble";
import { useRecoilState } from "recoil";
import { currentAnswerState } from "../../atoms/atoms";
const StyledAnswersContainer = styled.div`
  padding: 10px;

  .answers-container-title {
    font-size: 1.2em;
    padding: 20px;
    color: #3d4044;
  }
`;
const StyledAnswer = styled.li`
  display: flex;
  flex-direction: column;
  width: 900px;
  /* width: 100%; */
  .answer-main-wrap {
    border-bottom: 1px solid lightgrey;
    .answer-main {
      display: flex;
      flex-direction: row;
      .answer-body {
        width: 75%;
        .Tag-section {
          position: relative;
          button {
            margin-right: 5px;
            background-color: #fff;
            border: none;
            color: #3d4044;
          }
        }
      }
    }
    .UserCard {
      width: 210px;
      float: right;
    }
  }
`;

const Button = ({ value, onUpdateButtonClick, answerId }) => {
  return (
    <button onClick={() => onUpdateButtonClick(answerId, value)}>
      {value}
    </button>
  );
};

const AnswersContainer = () => {
  const [AnswerData, setAnswerData] = useState([]);
  const [openShare, setOpenShare] = useState(false);
  const [selectedComment, setSelectedComment] = useState();
  const [currentAnswer, setCurrentAnswer] = useRecoilState(currentAnswerState);
  const UpdateAnswerValues = ["Share", "Edit", "Delete"];
  const { id } = useParams();
  const navigate = useNavigate();

  //답변 조회 기능
  useEffect(() => {
    return async () => {
      axios.defaults.withCredentials = true;

      axios
        .get(`${BASE_URL}${id}`, {
          headers: {
            "ngrok-skip-browser-warning": "skip",
          },
        })
        .then((res) => {
          const { data } = res;
          setAnswerData(data.answer);
        });
    };
  }, [id]);

  const onUpdateButtonClick = (ind, value) => {
    setSelectedComment(ind);
    if (value === "Share") setOpenShare((pre) => !pre);
    if (value === "Edit") {
      setCurrentAnswer(AnswerData.filter((v) => v.answerId === ind)[0]);
      navigate(`/answer/${ind}/edit`);
    }
    if (value === "Delete")
      axios.delete(`${BASE_URL}answers/${ind}`).then((res) => {
        navigate(`/question/${id}`);
      });
  };

  return (
    <StyledAnswersContainer className="AnswersContainer">
      <h2 className="answers-container-title">{AnswerData.length} Answers</h2>
      <ul className="answers-list">
        <StyledAnswer className="Answer">
          {AnswerData.map((datas) => {
            return (
              <div className="answer-main-wrap" key={datas.answerId}>
                <div className="answer-main">
                  <Vote datas={datas} />
                  <div className="answer-body">
                    <div>
                      <Markdown markdown={datas.answerBody} />
                      <div className="Tag-section">
                        {UpdateAnswerValues.map((v, idx) => (
                          <Button
                            key={idx}
                            value={v}
                            answerId={datas.answerId}
                            onUpdateButtonClick={onUpdateButtonClick}
                          />
                        ))}
                        {openShare && (
                          <Bubble
                            link="글 주소 기재"
                            answerId={datas.answerId}
                            selectedComment={selectedComment}
                            isAnswer={true}
                          />
                        )}
                      </div>
                    </div>
                    <div className="UserCard">
                      <UserCard
                        answer
                        createdAt={datas.createdAt.slice(0, 19)}
                        photoURL={datas.photoURL}
                        displayName={datas.nickName}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </StyledAnswer>

        <AnswerCreate />
      </ul>
    </StyledAnswersContainer>
  );
};

export default AnswersContainer;
