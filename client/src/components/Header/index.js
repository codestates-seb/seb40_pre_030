import { isLogged } from "../../atoms/atoms";
import { useRecoilState } from "recoil";
import { HeaderWrapper } from "./style";
import { HeaderCont, HeaderNav, Logo, SearchBar } from "./HeaderCotents";

const Header = () => {
  const [logged, setLogged] = useRecoilState(isLogged);
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
