import styled from "styled-components";
import YellowBox from "./YellowBox";
import Collectives from "./Collectives";

const SideWrap = styled.div`
  /* width: 300px; */
  /* position: sticky;
  top: 0; */
  width: 25vw;
  float: right;
  /* margin: 0 60px; */
  margin-right: 6rem;
  margin-left: 1rem;
  z-index: 1;
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
