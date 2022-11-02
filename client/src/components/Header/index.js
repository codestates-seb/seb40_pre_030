import { isLogged } from "../../atoms/atoms";
import { useRecoilState } from "recoil";
import { HeaderWrapper } from "./style";
import { HeaderCont, HeaderNav, Logo, SearchBar } from "./HeaderCotents";

// import { useRecoilValue } from "recoil";
import { loginStatus } from "../../atoms/atoms.js";
import { useState } from "react";

const Header = () => {
  // const [logged, setLogged] = useRecoilState(isLogged);
  // const [logged, SetLogged] = useState(false);
  // let logtag = localStorage.getItem("recoil-persist");
  // const [logged, setLogged] = useState(logtag);
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
