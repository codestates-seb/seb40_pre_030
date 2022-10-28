import styled from "styled-components";
import QuestionsContainer from "../components/Board/QuestionsContainer";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/Sidebar";
import Tags from "./Tags";
import Footer from "../components/Footer";

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
      <Tags />
      <Sidebar />
      <Footer />
    </StyledMain>
  );
};

export default Main;
