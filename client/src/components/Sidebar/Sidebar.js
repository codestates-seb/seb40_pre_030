import styled from "styled-components";
import YellowBox from "./YellowBox";
import Collectives from "./Collectives";

const SideWrap = styled.div`
  width: 20%;
  float: right;
  margin-right: 6rem;
  margin-left: 1rem;
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
