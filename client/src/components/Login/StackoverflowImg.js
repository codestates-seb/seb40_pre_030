import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/stackLogo.svg";

const Stackicon = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
  color: orange;
`;
const stackoverflowimg = () => {
  return (
    <Stackicon>
      <Logo width="32" height="37" />
    </Stackicon>
  );
};

export default stackoverflowimg;
