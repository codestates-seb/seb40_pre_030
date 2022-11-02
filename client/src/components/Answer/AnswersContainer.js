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
import { useParams } from "react-router";
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
  .answer-main-wrap {
    border-bottom: 1px solid lightgrey;
    .answer-main {
      display: flex;
      flex-direction: row;
      .answer-body {
        width: 100%;
        .Tag-section > button {
          margin-top: 10px;
          margin-right: 5px;
          background-color: #fff;
          border: none;
          color: #3d4044;
        }
      }
    }
    .UserCard {
      width: 210px;
      float: right;
    }
  }
`;

const AnswersContainer = () => {
  const [AnswerData, setAnswerData] = useState([]);
  const { id } = useParams();

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
  }, []);

  //답글 삭제 기능
  const AnswerDelete = (answerId) => {
    axios
      .delete(`${BASE_URL}answers/${answerId}`)
      .then((res) => window.location.reload());
  };
  console.log(AnswerData);

  return (
    <StyledAnswersContainer className="AnswersContainer">
      <h2 className="answers-container-title">{AnswerData.length} Answers</h2>
      <ul className="answers-list">
        <StyledAnswer className="Answer">
          {AnswerData.map((datas) => {
            return (
              <div className="answer-main-wrap" key={datas}>
                <div className="answer-main">
                  <Vote datas={datas} />
                  <div className="answer-body">
                    <div>
                      <Markdown markdown={datas.answerBody} />
                      <div className="Tag-section">
                        <button value="">Share </button>
                        <button value="">Edit</button>
                        <button onClick={() => AnswerDelete(datas.answerId)}>
                          Delete
                        </button>
                        <button value="">Flag</button>
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
