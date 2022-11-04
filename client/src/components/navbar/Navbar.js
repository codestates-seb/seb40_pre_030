import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faCertificate,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ChangeLi = styled.li`
  box-sizing: border-box;
  height: 30px;
  font-size: 13px;
  font-weight: ${(props) => (props.tabPath === props.currentTab ? 800 : 600)};
  color: ${(props) => (props.tabPath === props.currentTab ? "black" : "gray")};
  background: ${(props) =>
    props.tabPath === props.currentTab ? props.theme.selectedTab : "white"};
  border-right: ${(props) =>
    props.tabPath === props.currentTab
      ? props.theme.highlightOrange + " solid 4px"
      : "none"};
  margin-bottom: 10px;
  padding-left: 10px;
  display: grid;
  align-items: center;
  grid-template-columns: 1.3em auto;
  :first-child {
    font-weight: ${(props) => (props.currentTab === "/" ? 800 : 600)};
    color: ${(props) => (props.currentTab === "/" ? "black" : "gray")};
    background: ${(props) =>
      props.currentTab === "/" ? props.theme.selectedTab : "white"};
    border-right: ${(props) =>
      props.currentTab === "/"
        ? props.theme.highlightOrange + " solid 4px"
        : "none"};
  }
  &:hover {
    color: black;
  }
  div {
    grid-column: 2/3;
  }
`;

const ChangeList = ({
  icon,
  text,
  iconStyle,
  tabPath,
  currentTab,
  onClick,
}) => {
  return (
    <ChangeLi currentTab={currentTab} tabPath={tabPath} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} style={iconStyle} />}
      <div>{text}</div>
    </ChangeLi>
  );
};

const NavTitle = styled.div`
  margin: 0 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`;

const NavContainer = styled.div`
  /* position: fixed; */
  position: sticky;
  justify-self: end;
  top: 0;
  height: 100vh;
  min-width: 185px;
  margin-top: 1rem;
  margin-left: 10px;
  padding-top: 24px;
  border-right: lightgray solid 1px;
  color: gray;
  //위치조정을 위해?
  margin-bottom: 40px;
  .nav-area {
    margin-bottom: 30px;
  }
`;

const Navbar = ({ seTabtIndex }) => {
  const [currentTab, setCurrentTab] = useState();
  const navigate = useNavigate();
  const publicTab = [
    { icon: faEarthAmericas, text: "Question" },
    { icon: null, text: "Tags" },
    { icon: null, text: "Users" },
    { icon: null, text: "Companies" },
  ];
  const path = useLocation().pathname;

  const onTabClick = (id) => {
    setCurrentTab(id);
    if (id === 0) navigate("/");
    if (id > 0) navigate(`/${publicTab[id].text.toLowerCase()}`);
  };

  return (
    <NavContainer className="Navbar">
      <nav>
        <ol>
          <div className="nav-area">
            <NavTitle>Home</NavTitle>
          </div>
          <div className="nav-area">
            <NavTitle>PUBLIC</NavTitle>
            <ul>
              {publicTab.map((el, idx) => (
                <ChangeList
                  key={idx}
                  icon={el.icon}
                  text={el.text}
                  currentTab={path}
                  tabPath={`/${el.text.toLowerCase()}`}
                  onClick={() => onTabClick(idx)}
                />
              ))}
            </ul>
          </div>
          <div className="nav-area">
            <NavTitle>
              <div>COLLECTIVES</div>
              <FontAwesomeIcon icon={faCircleInfo} />
            </NavTitle>
            <ul>
              <ChangeList
                icon={faCertificate}
                text={"Explore Collectives"}
                iconStyle={{ color: "orange" }}
                onClick={() => onTabClick(5)}
                tabPath={null}
              />
            </ul>
          </div>
          <div className="nav-area">
            <NavTitle>TEAMS</NavTitle>
          </div>
        </ol>
      </nav>
    </NavContainer>
  );
};

export default Navbar;
