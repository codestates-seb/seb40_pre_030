import styled from "styled-components";
import YellowBox from "./YellowBox";
import Collectives from "./Collectives";

const SideWrap = styled.div`
  width: 300px;
  float: right;
  margin-right: 50px;
`;
const Sidebar = () => {
  return (
    <>
      <SideWrap>
        <YellowBox />
        <Collectives />
      </SideWrap>
    </>
  );
};
export default Sidebar;
