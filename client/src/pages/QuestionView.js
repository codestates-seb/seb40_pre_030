import styled from "styled-components";
import AnswersContainer from "../components/Answer/AnswersContainer";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Article from "../components/Article/index";

const QuestionViewWrap = styled.div`
  width: 70%;
  margin-left: 21.8rem;
  display: grid;
  grid-template-columns: auto 80%;
  .ViewWrap {
    display: flex;
    .ViewWrap2 {
      display: flex;
      flex-direction: column;
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
            <Sidebar
              width="90"
              position="relative"
              left="100"
              rigth="10"
              marginleft="0.8"
            />
          </div>
        </div>
      </QuestionViewWrap>
    </>
  );
};
export default QuestionView;
