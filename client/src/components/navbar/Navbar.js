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
  margin-left: 10px;
  padding-top: 24px;
  border-right: lightgray solid 1px;
  color: gray;
  //위치조정을 위해?
  margin-bottom: 40px;

  .Teams-Wrap {
    border: 1px solid lightgrey;
    border-right: none;
    font-size: 0.9rem;
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 0.2rem;
    > img {
      margin: auto;
      margin-bottom: 1.5rem;
    }
    .Teams-text {
      width: 150px;
    }
    .TeamsBold {
      font-weight: bold;
      color: #000;
    }
    .Teams-Button {
      padding: 10px;
      text-align: center;

      margin-bottom: 0.5rem;
      border-radius: 0.2rem;
      .Color-grey {
        color: grey;
      }
      .Color-grey:visited {
        color: grey;
      }
      a {
        color: #fff;
        text-decoration: none;
      }
      a:visited {
        color: #fff;
      }
    }

    .Button-Orange {
      color: #fff;
      background-color: #f48225;
    }
  }
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
    else if (id > 0 && id < 3) navigate(`/${publicTab[id].text.toLowerCase()}`);
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
            <div className="Teams-Wrap">
              <div className="Teams-text">
                <span className="TeamsBold">Stack Overflow for Teams</span>–
                Start collaborating and sharing organizational knowledge.
              </div>
              <img
                className="wmx100 mx-auto my8 h-auto d-block"
                width="139"
                height="114"
                src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e"
                alt=""
              ></img>
              <div className="Teams-Button , Button-Orange">
                <a
                  href="https://try.stackoverflow.co/why-teams/?utm_source=so-owned&amp;utm_medium=side-bar&amp;utm_campaign=campaign-38&amp;utm_content=cta"
                  target="_blank"
                  rel="noopener"
                >
                  Create a free Team
                </a>
              </div>
              <div className="Teams-Button">
                <a
                  href="https://stackoverflow.co/teams/"
                  target="_blank"
                  rel="noopener"
                  className="Color-grey"
                >
                  {" "}
                  Why Teams?
                </a>
              </div>
            </div>
          </div>
        </ol>
      </nav>
    </NavContainer>
  );
};

export default Navbar;
