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

const headerNav = {
  false: ["About", "Products", "For Teams"],
  true: ["Products"],
};

const contents = {
  false: ["Log in", "Sign up"],
  true: ["Profile", faInbox, faTrophy, faFileCircleQuestion, faBars],
};

export const Logo = () => {
  return <div className="nav_item"></div>;
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

export const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => setSearchText(e.target.value);

  return (
    <form>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        className="search-bar"
        placeholder="Search..."
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
          <Atag name={el} logged={logged} />
        </div>
      ))}
    </>
  );
};
