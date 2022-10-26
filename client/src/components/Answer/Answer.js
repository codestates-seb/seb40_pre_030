import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Markdown from "../Markdown";

const StyledAnswer = styled.li``;

const Answer = () => {
  return (
    <StyledAnswer className="Answer">
      <div className="answer-vote">
        <FontAwesomeIcon icon={faCaretUp} />
        <div>{"2"}</div>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      <div className="answer-body">
        <Markdown />
      </div>
      <div className="answer-user-info"></div>
    </StyledAnswer>
  );
};

export default Answer;
