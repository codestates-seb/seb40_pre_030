import { useState } from "react"

import { HeaderWrapper } from "./style"
import { HeaderCont, HeaderNav, SearchBar } from "./headercotents";

const Header = () => {
  const [logged, SetLogged] = useState(true);
  
  return(
    <HeaderWrapper>
      <nav>
        <HeaderNav logged={logged} />
        <SearchBar />
        <HeaderCont logged={logged} />
      </nav>
    </HeaderWrapper>
  )
}
export default Header