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
  background: ${({ navbg }) => (navbg ? "lightgray" : "white")};
  box-sizing: border-box;
  border-right: solid 10px ${({ navbg }) => (navbg ? "orange" : "white")};
  color: ${({ navbg }) => (navbg ? "black" : "gray")};

  &:hover {
    color: black;
  }
`;

const NavTitle = styled.div`
  margin: 10px;
`;

const NavContainer = styled.div`
  /* position: fixed; */
  width: 20%;
  color: gray;
  padding-top: 24px;
  border-right: lightgray solid 1px;
`;

const Navbar = () => {
  // const navigate = useNavigate();
  const [navbg, setnavbg] = useState(false);
  const [tab, setTab] = useState("");

  console.log(tab);

  const Onclickevent = (e) => {
    setnavbg(!navbg);
  };
  //     navigate("/main");
  // }

  return (
    <NavContainer className="Navbar">
      <nav>
        <ol>
          <NavTitle>Home</NavTitle>
          <NavTitle>
            PUBLIC
            <ul>
              <Link to="/">
                <ChangeLi navbg={navbg} onClick={Onclickevent}>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                  Questions
                </ChangeLi>
              </Link>
              <Link to="/tags">
                <ChangeLi navbg={navbg} onClick={Onclickevent}>
                  Tags
                </ChangeLi>
              </Link>
              <Link to="/users">
                <ChangeLi onClick={Onclickevent}>Users</ChangeLi>
              </Link>
              <ChangeLi onClick={Onclickevent}>Companies</ChangeLi>
            </ul>
          </NavTitle>
          <NavTitle>
            COLLECTIVES
            <FontAwesomeIcon icon={faCircleInfo} />
            <ul>
              <ChangeLi>
                <FontAwesomeIcon
                  icon={faCertificate}
                  style={{ color: "orange" }}
                />
                Explore Collectives
              </ChangeLi>
            </ul>
          </NavTitle>
          <NavTitle>TEAMS</NavTitle>
        </ol>
      </nav>
    </NavContainer>
  );
};

export default Navbar;
