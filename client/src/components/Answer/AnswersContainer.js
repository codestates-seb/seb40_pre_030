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

  .answer-main-wrap {
    border-bottom: 1px solid lightgrey;
    .answer-main {
      display: flex;
      flex-direction: row;

      .answer-body {
        width: 100%;
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
  useEffect(() => {
    //해당 페이지의 답변
    return async () => {
      axios.defaults.withCredentials = true;

      axios
        .get(`${BASE_URL}1`, {
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

  console.log(AnswerData);
  return (
    <StyledAnswersContainer className="AnswersContainer">
      <h2 className="answers-container-title">{"2"} Answers</h2>
      <ul className="answers-list">
        <StyledAnswer className="Answer">
          {AnswerData.map((datas) => {
            return (
              <div className="answer-main-wrap">
                <div className="answer-main">
                  <Vote voteCount={datas.voteCount} />
                  <div className="answer-body">
                    <div>
                      <Markdown AnswerBody={datas.answerBody} />
                      <div className="Tag-section">
                        <Tag value="Share" />
                        <Tag value="Edit" />
                        <Tag value="Delete" />
                        <Tag value="Flag" />
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
