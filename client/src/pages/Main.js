import styled from "styled-components";
import QuestionsContainer from "../components/Board/QuestionsContainer";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Tag from "./Tag";

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
      <Routes>
        <Route path="/" element={<QuestionsContainer />}></Route>
        <Route path="/tags" element={<Tag />}></Route>
      </Routes>
      <Sidebar />
    </StyledMain>
  );
};

export default Main;
