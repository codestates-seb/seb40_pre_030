import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledP = styled.p`
  border: ${(props) =>
    props.answerCount === 0
      ? "none"
      : (props) => {
          return props.theme.selectedGreenTag + " solid 1px";
        }};
  border-radius: 3px;
  padding: ${(props) => (props.answerCount === 0 ? "none" : "5px 4px")};
  width: fit-content;
  color: ${(props) =>
    props.answerCount === 0
      ? (props) => props.theme.grayFont
      : (props) => props.theme.selectedGreenTag};
  font-weight: 500;
`;

const AnswerBox = ({ answerCount }) => {
  return (
    <StyledP answerCount={answerCount}>
      {answerCount} {answerCount === 1 ? "answer" : "answers"}
    </StyledP>
  );
};

export default AnswerBox;
