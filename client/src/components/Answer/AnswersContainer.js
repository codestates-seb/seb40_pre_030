import styled from "styled-components";
import Answer from "./Answer";
import AnswerCreate from "./AnswerCreate";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../util/api";

import Markdown from "../Markdown";
import UserCard from "../UserCard";
import Vote from "../Vote";
const StyledAnswersContainer = styled.div`
  .answers-container-title {
    font-size: 1.5em;
    padding: 20px;
    color: #3d4044;
  }
`;
const StyledAnswer = styled.li`
  border-bottom: lightgray solid 1px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  .answer-body {
    display: flex;
    flex-direction: row;
  }
  .UserCard {
    float: right;
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
              <>
                <div className="answer-body">
                  <Vote voteCount={datas.voteCount} />
                  <Markdown AnswerBody={datas.answerBody} />
                </div>
                <div className="UserCard">
                  <UserCard
                    answer
                    createdAt={datas.createdAt.slice(0, 19)}
                    photoURL="https://www.gravatar.com/avatar/37d008229a56f1f8cb7a017644f9554d?s=64&d=identicon&r=PG"
                    displayName={datas.nickName}
                  />
                </div>
              </>
            );
          })}
        </StyledAnswer>

        <AnswerCreate />
      </ul>
    </StyledAnswersContainer>
  );
};

export default AnswersContainer;
