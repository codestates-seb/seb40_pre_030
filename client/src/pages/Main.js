import styled from "styled-components";
import Aside from "../components/Aside";
import QuestionsContainer from "../components/Board/QuestionsContainer";
import Navbar from "../components/navbar/Navbar";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  .main-container {
    display: flex;
    margin: 0 auto;
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <div className="main-container">
        <Navbar />
        <QuestionsContainer />
        <Aside />
      </div>
    </StyledMain>
  );
};

export default Main;
