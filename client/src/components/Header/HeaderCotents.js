// navigation | search-bar | contents
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faInbox,
  faTrophy,
  faFileCircleQuestion,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Atag from "./Atag";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginStatus } from "../../atoms/atom.js";

const headerNav = {
  false: ["About", "Products", "For Teams"],
  true: ["Products"],
};

const contents = {
  false: ["Log in", "Sign up"],
  true: ["Profile", faInbox, faTrophy, faFileCircleQuestion, faBars],
};

export const Logo = () => {
  return (
    <Link to="/">
      <div className="nav_item"></div>
    </Link>
  );
};

export const HeaderNav = ({ logged }) => {
  return (
    <>
      {headerNav[logged].map((el, idx) => (
        <div key={idx}>
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

export const HeaderCont = ({ logged }) => {
  return (
    <>
      {contents[logged].map((el, idx) => (
        <div key={idx}>
          {el === "Log in" ? (
            <Link to="/users/login">
              <Atag name={el} logged={logged} />
            </Link>
          ) : el === "Sign up" ? (
            <Link to="users/signup">
              <Atag name={el} logged={logged} />
            </Link>
          ) : el === faBars ? (
            <Link to="users/logout">
              <Atag name={el} logged={logged} />
            </Link>
          ) : (
            <Atag name={el} logged={logged} />
          )}
        </div>
      ))}
    </>
  );
};

// {
//   el === "Log in" ? (
//     <Link to="/users/login">
//       <Atag name={el} logged={logged} />
//     </Link>
//   ) : null;
// }
// {
//   el === "Sign up" ? (
//     <Link to="users/signup">
//       <Atag name={el} logged={logged} />
//     </Link>
//   ) : null;
// }
