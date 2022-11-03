import styled from "styled-components";
import AnswersContainer from "../components/Answer/AnswersContainer";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Article from "../components/Article/index";

const DoubleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestionViewWrap = styled.div`
  width: 80%;
  /* margin: auto; */
  display: flex;
  flex-direction: row;
  .ViewWrap {
    display: flex;
    flex-direction: row;
    .ViewWrap2 {
      width: 60%;
    }
  }
`;

const QuestionView = () => {
  return (
    <DoubleWrap>
      <QuestionViewWrap>
        <div className="ViewWrap">
          <Navbar />
          <div className="ViewWrap2">
            <Article />
            <AnswersContainer />
          </div>

          <Sidebar />
        </div>
      </QuestionViewWrap>
    </DoubleWrap>
  );
};
export default QuestionView;
