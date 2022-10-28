import styled from "styled-components";
import Header from "../components/Header";
import Signup from "../components/Signup/Signup";
const StyledSign = styled.div`
  display: grid;
`;

const Main = () => {
  return (
    <StyledSign>
      <Header></Header>
      <Signup></Signup>
    </StyledSign>
  );
};

export default Main;
