import styled from "styled-components";
import AnswersContainer from "../components/Answer/AnswersContainer";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Article from "../components/Article/index";

const QuestionViewWrap = styled.div`
  width: 70%;
  margin-left: 23.4rem;
  display: flex;
  justify-content: center;
  .ViewWrap {
    display: flex;
    .ViewWrap2 {
      width: 81.5%;
    }
    .ViewWrap3 {
      margin-top: 1rem;
    }
  }
`;

const QuestionView = () => {
  return (
    <>
      <QuestionViewWrap>
        <div className="ViewWrap">
          <Navbar />
          <div className="ViewWrap2">
            <Article />
            <AnswersContainer />
          </div>
          <div className="ViewWrap3">
            <Sidebar />
          </div>
        </div>
      </QuestionViewWrap>
    </>
  );
};
export default QuestionView;
