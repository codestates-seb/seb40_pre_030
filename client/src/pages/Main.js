import styled from "styled-components";
import Sidebar from "../components/Sidebar";
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
      <Navbar />
      <QuestionsContainer />
      <Sidebar />
    </StyledMain>
  );
};

export default Main;
