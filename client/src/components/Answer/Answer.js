import styled from "styled-components";
import Markdown from "../Markdown";
import UserCard from "../UserCard";
import Vote from "../Vote";

const StyledAnswer = styled.li`
  border-bottom: lightgray solid 1px;
  margin-top: 30px;
  display: grid;

  .answer-body {
    width: 100%;
    grid-column: 2/3;
  }
  .UserCard {
    grid-column: 2/3;
    justify-self: flex-end;
  }
`;

const Answer = () => {
  return (
    <StyledAnswer className="Answer">
      <Vote voteCount={1353} />
      <div className="answer-body">
        <Markdown />
      </div>
      <UserCard
        answer
        createdAt="Mar 6, 2011 at 12:43"
        photoURL="https://www.gravatar.com/avatar/37d008229a56f1f8cb7a017644f9554d?s=64&d=identicon&r=PG"
        displayName="Matt Price"
      />
    </StyledAnswer>
  );
};

export default Answer;
