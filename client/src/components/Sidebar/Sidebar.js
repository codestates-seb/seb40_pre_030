import styled from "styled-components";
import YellowBox from "./YellowBox";
import Collectives from "./Collectives";

const SideWrap = styled.div`
  width: 300px;
  min-width: 300px;
  max-width: 300px;
  margin-left: 24px;
`;
const Sidebar = ({ position, left }) => {
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
