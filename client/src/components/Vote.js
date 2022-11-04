import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../util/api";
import { useNavigate, useParams } from "react-router";
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

const Vote = ({ idx, AnswerData, setAnswerData, datas }) => {
  const { id } = useParams();
  const accessToken = window.localStorage.getItem("accessToken");

  const onVoteClick = (value) => {
    let answerDataCopy = [...AnswerData];
    if (!accessToken) alert("Please sign in first💗");
    else {
      if (value === "Up") {
        answerDataCopy[idx] = { ...datas, voteCount: datas.voteCount + 1 };
        setAnswerData(answerDataCopy);
      }
      if (value === "Down") {
        answerDataCopy[idx] = { ...datas, voteCount: datas.voteCount - 1 };
        setAnswerData(answerDataCopy);
      }
      axios({
        method: "patch",
        url: `${BASE_URL}answers/${id}/${datas.answerId}/vote${value}`,
        headers: {
          "ngrok-skip-browser-warning": "skip",
          authorization: accessToken,
        },
      });
    }
  };

  return (
    <StyledVote className="Vote">
      <FontAwesomeIcon
        className="vote-icon"
        icon={faCaretUp}
        onClick={() => onVoteClick("Up")}
      />
      <div>{datas.voteCount}</div>
      <FontAwesomeIcon
        className="vote-icon"
        icon={faCaretDown}
        onClick={() => onVoteClick("Down")}
      />
    </StyledVote>
  );
};

export default Vote;
