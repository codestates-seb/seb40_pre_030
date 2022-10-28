import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";
import QuestionsContainer from "../components/Board/QuestionsContainer";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/Sidebar";

import { Route, Routes } from "react-router-dom";
import Tag from "./Tag";
import Footer from "../components/Footer";

const StyledMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1.7fr;
`;

const Main = () => {
  return (
    <StyledMain>
      <Navbar />
      <Routes>
        <Route path="/" element={<QuestionsContainer />}></Route>
        <Route path="/tags" element={<Tag />}></Route>
      </Routes>
      <Tags />
      <Sidebar />
      <Footer />
    </StyledMain>
  );
};

export default Main;
