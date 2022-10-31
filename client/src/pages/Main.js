import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";
import QuestionsContainer from "../components/Board/QuestionsContainer";
import Navbar from "../components/navbar/Navbar";

import { Route, Routes } from "react-router-dom";
import Tag from "./Tag";
import Footer from "../components/Footer";
import { useState } from "react";
import Users from "./Users";

const StyledMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1.7fr;
`;

const tabCont = [<QuestionsContainer />, <Tag />, <Users />];

const Main = () => {
  const [tabIndex, seTabtIndex] = useState(0);
  return (
    <StyledMain>
      <Navbar seTabtIndex={seTabtIndex} />
      {tabCont[tabIndex]}
      <Sidebar />
      <Footer />
    </StyledMain>
  );
};

export default Main;
