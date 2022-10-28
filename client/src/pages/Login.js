import styled from "styled-components";
import Login from "../components/Login/Login";
import Header from "../components/Header";
const StyledLogin = styled.div`
  display: grid;
`;

const Main = () => {
  return (
    <StyledLogin>
      <Header></Header>
      <Login></Login>
    </StyledLogin>
  );
};

export default Main;
