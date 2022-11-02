import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import Atag from "../Header/Atag";
import ButtonTag from "../Header/ButtonTag";
import { isLogged, loggedUserAtom } from "../../atoms/atoms";
import { useSingup, useLogin } from "../../hooks/customServHook";
import { loginStatus } from "../../atoms/atoms";
import { OutForm, Wrapper, Contents, SiteLi } from "./style";

const siteFile = [
  ["askbuntu.com", "https://askubuntu.com/", "0 -360px"],
  ["mathoverflow.com", "https://mathoverflow.net/", "0 -4032px"],
  ["serverfault.com", "https://serverfault.com/", "0 -5652px"],
  ["stackapps.com", "https://stackapps.com/", "0 -6084px"],
  ["stackexchange.com", "https://stackexchange.com/", "0 -6102px"],
  ["stackoverflow.com", "https://stackoverflow.com/", "0 -6138px"],
  ["superuser.com", "https://superuser.com/", "0 -6282px"],
];
const LogOut = () => {
  const navigate = useNavigate();
  const [checkForAll, setCheckForAll] = useState(false);
  const [logged, setLogged] = useRecoilState(loginStatus);
  const [user, setUser] = useRecoilState(loggedUserAtom);
  setUser(useLogin());
  console.log("user", user);
  console.log("logged", logged);

  const onClickCheck = (e) => setCheckForAll(!checkForAll);
  const onLogoutClick = (e) => {
    e.preventDefault();
    setLogged(!logged);
    localStorage.removeItem("recoil-persist");
    navigate("/");
  };

  return (
    <Wrapper>
      <Contents>
        <div>
          Clicking “Log out” will log you out of the following domains on this
          device:
        </div>
        <OutForm>
          <ul>
            {siteFile.map((el, idx) => (
              <SiteLi position={0 - 360}>
                <a key={idx} href={el[1]}>
                  <div>
                    <div className="siteLogo"></div>
                  </div>
                  <div className="siteName">{el[0]}</div>
                </a>
              </SiteLi>
            ))}
          </ul>
          <input type="checkbox" onClick={onClickCheck} />
          Log out on all devices
          <div className="decider">
            <ButtonTag name="Log out" onClick={onLogoutClick} />
            <Atag name="Cancel" link="http://localhost:3000/" />
          </div>
          <div className="hint">
            <span>
              If you’re on a shared computer, remember to log out of your Open
              ID provider (Facebook, Google, Stack Exchange, etc.) as well.
            </span>
          </div>
        </OutForm>
      </Contents>
    </Wrapper>
  );
};

export default LogOut;
