import styled from "styled-components";

import QuestionsContainer from "../components/Board/QuestionsContainer";
import Header from "../components/Header";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/Sidebar";

const StyledMain = styled.div`
  display: grid;
`;

// 파일 조립 과정 필요합니다. (전체 컴포넌트 CSS 수정 필요)

const Main = () => {
  return (
    <StyledMain>
      <Header />
      <Navbar />
      <QuestionsContainer />
      <Sidebar />
    </StyledMain>
  );
};

export default Main;
