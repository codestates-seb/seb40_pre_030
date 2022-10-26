import { useState } from "react"

import { HeaderWrapper } from "./style"
import { HeaderCont, HeaderNav, Logo, SearchBar } from "./headercotents";

const Header = () => {
  const [logged, SetLogged] = useState(true);

  return(
    <HeaderWrapper>
      <nav>
        <Logo />
        <HeaderNav logged={logged} />
        <SearchBar />
        <HeaderCont logged={logged} />
      </nav>
    </HeaderWrapper>
  )
}
export default Header