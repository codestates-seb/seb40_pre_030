import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../util/api";

const StyledVote = styled.div`
  font-size: 1.7rem;
  color: gray;
  margin: 0 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  .vote-icon {
    font-size: 3rem;
  }
  .answer-body {
    grid-column: 2/3;
  }
`;

const Vote = ({ datas }) => {
  const handleUpClick = () => {
    axios
      .patch(`${BASE_URL}answers/1/${datas.answerId}/voteUp`)
      .then((response) => {
        window.location.reload();
      });
  };
  const handleDownClick = () => {
    axios
      .patch(`${BASE_URL}answers/1/${datas.answerId}/voteDown`)
      .then((response) => {
        window.location.reload();
      });
  };

  return (
    <StyledVote className="Vote">
      <FontAwesomeIcon
        className="vote-icon"
        icon={faCaretUp}
        onClick={handleUpClick}
      />
      <div>{datas.voteCount}</div>
      <FontAwesomeIcon
        className="vote-icon"
        icon={faCaretDown}
        onClick={handleDownClick}
      />
    </StyledVote>
  );
};

export default Vote;
