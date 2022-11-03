import styled from "styled-components";
import YellowBox from "./YellowBox";
import Collectives from "./Collectives";

const SideWrap = styled.div`
  width: ${(props) => props.width | 20}%;
  float: right;
  position: ${(props) => (props.position ? "relative" : null)};
  left: ${(props) => props.left | null}px;
  margin-right: 6rem;
  margin-left: ${(props) => props.marginleft | 1}rem;
`;
const Sidebar = ({ width, position, left, marginleft }) => {
  return (
    <>
      <SideWrap
        width={width}
        position={position}
        left={left}
        margin-left={marginleft}
      >
        <YellowBox />
        <Collectives />
      </SideWrap>
    </>
  );
};
export default Sidebar;
