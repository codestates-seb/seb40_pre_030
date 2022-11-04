import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";
import QuestionsContainer from "../components/Board/QuestionsContainer";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

const StyledMain = styled.div`
  width: 80%;
  display: grid;
  margin-left: 15rem;
  grid-template-columns: auto 80%;
  .main-contents-wrapper {
    display: flex;
    margin-top: 1rem;
  }
`;

const Main = () => {
  return (
    <StyledMain className="here">
      <Navbar />
      <div className="main-contents-wrapper">
        <QuestionsContainer />
        <Sidebar />
      </div>
    </StyledMain>
  );
};

export default Main;
