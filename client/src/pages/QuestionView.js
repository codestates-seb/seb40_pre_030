import styled from "styled-components";
import AnswersContainer from "../components/Answer/AnswersContainer";
import Answer from "../components/Answer/Answer";
import AnswerCreate from "../components/Board/AnswerCreate";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
const QuestionViewWrap = styled.div`
width:100%;


margin:auto;
  .Sectionwrap{
    display:flex;
    background-color:blue
    align-items:right;

   margin:auto;
      

 
margin-top:50px;
 position:relative;
.Viewsection{
  margin:auto;
}

}
`;

const QuetionView = () => {
  return (
    <>
      <Header></Header>
      <QuestionViewWrap>
        <Navbar></Navbar>

        <div className="Sectionwrap">
          <section className="Viewsection">
            <AnswersContainer></AnswersContainer>
            <AnswerCreate className="AnswerEditor"></AnswerCreate>
          </section>
          <Sidebar></Sidebar>
        </div>
      </QuestionViewWrap>
    </>
  );
};
export default QuetionView;
