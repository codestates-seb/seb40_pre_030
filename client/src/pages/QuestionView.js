import styled from "styled-components";
import AnswersContainer from "../components/Answer/AnswersContainer";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Article from "../components/Article/index";
const QuestionViewWrap = styled.div`
  width: 100%;
  margin: auto;

  .ViewWrap {
    display: flex;
    flex-direction: row;
    align-itmes: center;
    justify-content: center;
    .ViewWrap2 {
    }
  }
`;

const QuetionView = () => {
  return (
    <>
      <QuestionViewWrap>
        <div className="ViewWrap">
          <Navbar />
          <div className="ViewWrap2">
            <Article></Article>
            <AnswersContainer />
          </div>
          <Sidebar />
        </div>
      </QuestionViewWrap>
    </>
  );
};
export default QuetionView;
