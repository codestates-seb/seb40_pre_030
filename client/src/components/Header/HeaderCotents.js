// navigation | search-bar | contents
import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faInbox, faTrophy, faFileCircleQuestion, faBars } from "@fortawesome/free-solid-svg-icons";
import {faStackOverflow} from "@fortawesome/free-brands-svg-icons"
import Atag from "./Atag";

const headerNav = {
  'false': ['About', 'Products', 'For Teams'], 
  'true': ['Products']
}

const contents = {
  'false': ['Log in', 'Sign up'], 
  'true': ['Profile', faInbox, faTrophy, faFileCircleQuestion, faBars]
}

export const Logo = () => {
  return(
    <>
      <div className="nav_item">
        <a href="http://localhost:3000/"><FontAwesomeIcon icon={faStackOverflow}/>stackoverflow</a>
      </div>
    </>

  )
}


export const HeaderNav = ({logged}) => {
  return(
    <>
      {headerNav[logged].map((el, idx) => (
        <div className="nav_item" key={idx}>
          <Atag name={el} logged={logged}/>
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
          <Atag name={el} logged={logged} />
        </div>
      ))}
    </>
  )
}