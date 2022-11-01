import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";
import QuestionsContainer from "../components/Board/QuestionsContainer";
import Navbar from "../components/navbar/Navbar";

import Footer from "../components/Footer";
import { useState } from "react";
import Users from "./Users";
import Tags from "./Tags";

const StyledMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1.7fr;
`;

const tabCont = [<QuestionsContainer />, <Tags />, <Users />];

const Main = () => {
  const [tabIndex, seTabtIndex] = useState(0);
  return (
    <StyledMain>
      <Navbar seTabtIndex={seTabtIndex} />
      {tabCont[tabIndex]}
      {tabIndex === 0 ? <Sidebar /> : null}
      <Footer />
    </StyledMain>
  );
};

export default Main;
