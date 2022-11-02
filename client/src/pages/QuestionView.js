import styled from "styled-components";
import AnswersContainer from "../components/Answer/AnswersContainer";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Article from "../components/Article/index";
import { useParams } from "react-router";
import { faColonSign } from "@fortawesome/free-solid-svg-icons";

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

const QuestionView = () => {
  const { id } = useParams();

  return (
    <>
      <QuestionViewWrap pageid={id}>
        <div className="ViewWrap">
          <Navbar />
          <div className="ViewWrap2">
            <Article pageid={id} />

            <AnswersContainer pageid={id} />
          </div>
          <Sidebar />
        </div>
      </QuestionViewWrap>
    </>
  );
};
export default QuestionView;
