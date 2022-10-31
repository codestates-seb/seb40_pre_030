import { useState } from "react";
import styled from "styled-components";
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faCertificate,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const ChangeLi = styled.li`
  box-sizing: border-box;
  height: 40px;
  font-size: 15px;
  font-weight: ${(props) => (props.idx === props.currentTab ? 800 : 600)};
  color: ${(props) => (props.idx === props.currentTab ? "black" : "gray")};
  background: ${(props) =>
    props.idx === props.currentTab ? props.theme.selectedTab : "white"};
  border-right: ${(props) =>
    props.idx === props.currentTab
      ? props.theme.highlightOrange + " solid 4px"
      : "none"};
  margin-bottom: 10px;
  padding-left: 10px;
  display: grid;
  align-items: center;
  grid-template-columns: 1.3em auto;
  &:hover {
    color: black;
  }
  div {
    grid-column: 2/3;
  }
`;

const ChangeList = ({ icon, text, iconStyle, idx, currentTab, onClick }) => {
  return (
    <ChangeLi currentTab={currentTab} idx={idx} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} style={iconStyle} />}
      <div>{text}</div>
    </ChangeLi>
  );
};

const NavTitle = styled.div`
  margin: 0 10px 17px 10px;
  display: flex;
  justify-content: space-between;
`;

const NavContainer = styled.div`
  /* position: fixed; */
  min-width: 185px;
  color: gray;
  padding-top: 24px;
  border-right: lightgray solid 1px;
  margin-left: 30px;
  justify-self: end;
  .nav-area {
    margin-bottom: 40px;
  }
`;

const Navbar = ({ seTabtIndex }) => {
  const [currentTab, setCurrentTab] = useState();

  const publicTab = [
    { icon: faEarthAmericas, text: "Question" },
    { icon: null, text: "Tags" },
    { icon: null, text: "Users" },
    { icon: null, text: "Companies" },
  ];
  const onTabClick = (id) => {
    setCurrentTab(id);
    seTabtIndex(id);
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
                  idx={idx}
                  currentTab={currentTab}
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
                idx={5}
                currentTab={currentTab}
                onClick={() => onTabClick(5)}
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
