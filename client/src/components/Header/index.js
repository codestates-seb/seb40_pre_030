import { isLogged } from "../../atoms/atoms";
import { useRecoilState } from "recoil";
import { HeaderWrapper } from "./style";
import { HeaderCont, HeaderNav, Logo, SearchBar } from "./HeaderCotents";
// import { useRecoilValue } from "recoil";
import { loginStatus } from "../../atoms/atoms";

const Header = () => {
  // const [logged, setLogged] = useRecoilState(isLogged);
  // const [logged, SetLogged] = useState(false);
  const [logged, SetLogged] = useRecoilState(loginStatus);

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
