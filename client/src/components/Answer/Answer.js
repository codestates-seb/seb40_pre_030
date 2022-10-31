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

const Answer = () => {
  return (
    <StyledAnswer className="Answer">
      <div className="answer-body">
        <Vote voteCount={1353} />
        <Markdown />
      </div>
      <div className="UserCard">
        <UserCard
          answer
          createdAt="Mar 6, 2011 at 12:43"
          photoURL="https://www.gravatar.com/avatar/37d008229a56f1f8cb7a017644f9554d?s=64&d=identicon&r=PG"
          displayName="Matt Price"
        />
      </div>
    </StyledAnswer>
  );
};

export default Answer;
