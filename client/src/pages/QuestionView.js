import styled from "styled-components";
import AnswersContainer from "../components/Answer/AnswersContainer";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Article from "../components/Article/index";
import Container from "../components/Container";

const QuestionViewWrap = styled.div`
  display: flex;
  justify-content: center;
  .main-contents-wrapper {
    display: flex;
  }
  .ViewWrap2 {
    display: flex;
    flex-direction: column;
  }
  .ViewWrap3 {
    margin-top: 1rem;
  }
`;

const QuestionView = () => {
  return (
    <QuestionViewWrap>
      <Container>
        <Navbar />
        <div className="main-contents-wrapper">
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
      </Container>
    </QuestionViewWrap>
  );
};
export default QuestionView;
