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
import { currentAnswerState, loginInfo } from "../../atoms/atoms";
import { calculateTime } from "../Board/util/calculateTime";
const StyledAnswersContainer = styled.div`
  padding: 10px;
  .answers-container-title {
    font-size: 1.2em;
    padding: 20px;
    color: #3d4044;
  }
  .edit-section {
    min-width: 670px;
    overflow: hidden;
  }
`;
const StyledAnswer = styled.li`
  display: flex;
  flex-direction: column;
  width: 99%;
  .answer-main-wrap {
    border-bottom: 1px solid lightgrey;
    .answer-main {
      display: flex;
      flex-direction: row;
      .answer-body {
        width: 100%;
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
  const [userInfo, setUserInfo] = useRecoilState(loginInfo);
  const UpdateAnswerValues = ["Share", "Edit", "Delete"];
  const [Count, setCount] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useRecoilState(loginInfo);
  const accessToken = window.localStorage.getItem("accessToken");

  //답변 조회 기능
  useEffect(() => {
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
  }, []);

  const onUpdateButtonClick = (answerId, value) => {
    setSelectedComment(answerId);
    setCurrentAnswer(AnswerData.filter((v) => v.answerId === answerId)[0]);
    if (value === "Share") setOpenShare((pre) => !pre);
    if (value === "Edit") {
      if (currentUser.userId === currentAnswer.userId) {
        navigate(`/answer/${answerId}/edit`);
      } else alert("You can only edit or delete your own!");
    }
    if (value === "Delete") {
      if (currentUser.userId === currentAnswer.userId) {
        if (window.confirm("Are you sure you want to delete it?")) {
          axios
            .delete(`${BASE_URL}answers/${answerId}`, {
              headers: {
                authorization: accessToken,
              },
            })
            .then((res) => {
              window.location.reload();
            });
        }
      } else alert("You can only edit or delete your own!");
    }
  };

  return (
    <StyledAnswersContainer className="AnswersContainer">
      <h2 className="answers-container-title">{AnswerData.length} Answers</h2>
      <ul className="answers-list">
        <StyledAnswer className="Answer">
          {AnswerData.map((datas, idx) => {
            return (
              <div className="answer-main-wrap" key={datas.answerId}>
                <div className="answer-main">
                  <Vote
                    idx={idx}
                    AnswerData={AnswerData}
                    setAnswerData={setAnswerData}
                    datas={datas}
                  />
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
                        createdAt={calculateTime(
                          new Date(datas.createdAt)
                        ).toLocaleString("ko-KR", {
                          timeZone: "UTC",
                        })}
                        photoURL={userInfo.photoURL}
                        displayName={datas.nickName}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </StyledAnswer>
        <div className="edit-section">
          <AnswerCreate setCount={setCount} Count={Count} />
        </div>
      </ul>
    </StyledAnswersContainer>
  );
};

export default AnswersContainer;
