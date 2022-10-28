import { useState } from "react";

import { HeaderWrapper } from "./style";
import { HeaderCont, HeaderNav, Logo, SearchBar } from "./HeaderCotents";

const Header = () => {
  const [logged, SetLogged] = useState(false);

  return (
    <HeaderWrapper className="Header">
      <nav>
        <Logo />
        <HeaderNav logged={logged} />
        <SearchBar />
        <HeaderCont logged={logged} />
      </nav>
    </HeaderWrapper>
  );
};
export default Header;
