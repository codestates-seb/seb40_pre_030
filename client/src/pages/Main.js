import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";
import QuestionsContainer from "../components/Board/QuestionsContainer";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  .main-contents-wrapper {
    max-width: 1100px;
    display: flex;
    margin-top: 1rem;
  }
`;

const Main = () => {
  return (
    <StyledMain className="Main">
      <Container>
        <Navbar />
        <div className="main-contents-wrapper">
          <QuestionsContainer />
          <Sidebar />
        </div>
      </Container>
    </StyledMain>
  );
};

export default Main;
