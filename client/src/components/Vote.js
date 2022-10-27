import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledVote = styled.div`
  font-size: 1.7rem;
  color: gray;
  margin: 0 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .vote-icon {
    font-size: 3.3rem;
  }
  .answer-body {
    grid-column: 2/3;
  }
`;

const Vote = ({ voteCount }) => {
  return (
    <StyledVote className="Vote">
      <FontAwesomeIcon className="vote-icon" icon={faCaretUp} />
      <div>{voteCount}</div>
      <FontAwesomeIcon className="vote-icon" icon={faCaretDown} />
    </StyledVote>
  );
};

export default Vote;
