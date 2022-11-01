import styled from "styled-components";
import Markdown from "../Markdown";
import UserCard from "../UserCard";
import Vote from "../Vote";

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

const Answer = ({ AnswerData }) => {
  console.log(AnswerData);
  return (
    <StyledAnswer className="Answer">
      <div className="answer-body">
        <Vote />
        <Markdown />
      </div>
      <div className="UserCard">
        <UserCard
          answer
          createdAt=""
          photoURL="https://www.gravatar.com/avatar/37d008229a56f1f8cb7a017644f9554d?s=64&d=identicon&r=PG"
          displayName=""
        />
      </div>
    </StyledAnswer>
  );
};

export default Answer;
