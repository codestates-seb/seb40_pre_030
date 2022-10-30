import styled from "styled-components";
import AnswersContainer from "../components/Answer/AnswersContainer";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const QuestionViewWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1.7fr;
`;

const QuetionView = () => {
  return (
    <>
      <QuestionViewWrap>
        <Navbar />
        <AnswersContainer />
        <Sidebar />
      </QuestionViewWrap>
    </>
  );
};
export default QuetionView;
