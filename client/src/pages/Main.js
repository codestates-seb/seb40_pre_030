import styled from "styled-components";
import Aside from "../components/Aside";
import QuestionsContainer from "../components/Board/QuestionsContainer";
import Header from "../components/Header";
import Navbar from "../components/navbar/Navbar";

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
      <Aside />
    </StyledMain>
  );
};

export default Main;
