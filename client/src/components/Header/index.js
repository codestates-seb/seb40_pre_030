import { useState } from "react";

import { HeaderWrapper } from "./style";
import { HeaderCont, HeaderNav, Logo, SearchBar } from "./HeaderCotents";
import { useRecoilState } from "recoil";
// import { useRecoilValue } from "recoil";
import { loginStatus } from "../../util/atom.js";

const Header = () => {
  // const [logged, SetLogged] = useState(false);
  const [logged, SetLogged] = useRecoilState(loginStatus);
  console.log(logged);

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
