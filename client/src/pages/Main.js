import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";
import QuestionsContainer from "../components/Board/QuestionsContainer";
import Navbar from "../components/navbar/Navbar";

const StyledMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1.7fr;
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
