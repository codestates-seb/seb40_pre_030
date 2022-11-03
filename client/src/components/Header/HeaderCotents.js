// navigation | search-bar | contents
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faInbox,
  faTrophy,
  faFileCircleQuestion,
  faBars,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Atag from "./Atag";
import { Link } from "react-router-dom";
import styled from "styled-components";

const headerNav = {
  false: ["About", "Products", "For Teams"],
  true: ["Products"],
};

const contents = {
  false: ["Log in", "Sign up"],
  true: [faUser, faInbox, faTrophy, faFileCircleQuestion, faBars],
};

// const Headerbutton = styled.button`
//   border: none;
//   background: ${(props) => props.background};
//   color: white;
//   color: ${(props) => props.color || "#013a60"};
// `;

export const Logo = () => {
  return <Link className="nav_item" to="/"></Link>;
};

export const HeaderNav = ({ logged }) => {
  return (
    <>
      {headerNav[logged].map((el, idx) => (
        <div className="hovergray_nav" key={idx}>
          <Atag name={el} logged={logged} />
        </div>
      ))}
    </>
  );
};

export const SearchBar = ({ placeHolderText }) => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => setSearchText(e.target.value);

  return (
    <form>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        className="search-bar"
        placeholder={placeHolderText ? placeHolderText : "Search..."}
        value={searchText}
        onChange={handleChange}
      />
    </form>
  );
};
//로그인 회원가입 버튼으로 만들어줌
export const HeaderCont = ({ logged }) => {
  return (
    <>
      {contents[logged].map((el, idx) => (
        <div key={idx}>
          {el === "Log in" ? (
            <Link to="/users/login">
              <div className="loginbtn">
                <Atag className="logtxt" name={el} logged={logged} />
              </div>
            </Link>
          ) : el === "Sign up" ? (
            <Link to="users/signup">
              <div className="signupbtn">
                <Atag className="signtxt" name={el} logged={logged} />
              </div>
            </Link>
          ) : el === faBars ? (
            <Link className="hovergray_cont" to="users/logout">
              <Atag name={el} logged={logged} />
            </Link>
          ) : (
            <Atag className="hovergray_cont" name={el} logged={logged} />
          )}
        </div>
      ))}
    </>
  );
};
