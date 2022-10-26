// navigation | search-bar | contents
import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Atag from "./atag";

const headerNav = {
  'false': ['About', 'Products', 'For Teams'], 
  'true': ['Products']
}

const contents = {
  'false': ['Log in', 'Sign up'], 
  'true': ['Profile', 'Inbox', 'Achievements', 'HowTo', 'Hamburger']
}

export const HeaderNav = ({logged}) => {
  return(
    <>
      {headerNav[logged].map((el, idx) => (
        <div className="nav_item" key={idx}>
          <Atag name={el} />
        </div>
      ))}
    </>
  )
}

export const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const handleChange = (e) => setSearchText(e.target.value);

  return(
    <form className="nav_item">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        placeholder="Search..."
        value={searchText}
        onChange={handleChange}
      />
    </form>
)
}

export const HeaderCont = ({logged}) => {
  return(
    <>
      {contents[logged].map((el, idx) => (
        <div className="nav_item" key={idx}>
          <Atag name={el} />
        </div>
      ))}
    </>
  )
}