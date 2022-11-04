import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import ButtonTag from "../Header/ButtonTag";
import { loggedUserAtom, loginInfo } from "../../atoms/atoms";

import { loginStatus } from "../../atoms/atoms";
import { OutForm, Wrapper, Contents, SiteLi } from "./style";
import { logout } from "../../util/Cookies";

const siteFile = [
  ["askbuntu.com", "https://askubuntu.com/", [0, -360]],
  ["mathoverflow.com", "https://mathoverflow.net/", [0, -4032]],
  ["serverfault.com", "https://serverfault.com/", [0, -5652]],
  ["stackapps.com", "https://stackapps.com/", [0, -6084]],
  ["stackexchange.com", "https://stackexchange.com/", [0, -6102]],
  ["stackoverflow.com", "https://stackoverflow.com/", [0, -6138]],
  ["superuser.com", "https://superuser.com/", [0, -6282]],
];
const LogOut = () => {
  const navigate = useNavigate();
  const [checkForAll, setCheckForAll] = useState(false);
  const [logged, setLogged] = useRecoilState(loginStatus);
  const [userInfo, setUserInfo] = useRecoilState(loginInfo);

  const onClickCheck = (e) => setCheckForAll(!checkForAll);
  const onLogoutClick = (e) => {
    e.preventDefault();
    setLogged(!logged);
    localStorage.removeItem("accessToken");
    navigate("/");
    logout();
    setUserInfo(null);
  };

  return (
    <Wrapper>
      <Contents>
        <div className="notice">
          <p>Clicking “Log out” will log you out of the following</p>
          <p>domains on this device:</p>
        </div>
        <OutForm>
          <ul>
            {siteFile.map((el, idx) => (
              <SiteLi position={el[2][0]} position2={el[2][1]} key={idx}>
                <a href={el[1]}>
                  <div>
                    <div className="siteLogo"></div>
                  </div>
                  <div className="siteName">{el[0]}</div>
                </a>
              </SiteLi>
            ))}
          </ul>
          <div className="checkbox">
            <input type="checkbox" onClick={onClickCheck} />
            <span>Log out on all devices</span>
          </div>
          <div className="decider">
            <ButtonTag name="Log out" onClick={onLogoutClick} />
            <a className="cancelbtn" href="/">
              Cancel
            </a>
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
