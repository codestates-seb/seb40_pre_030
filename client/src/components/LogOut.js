import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import Atag from "./Header/Atag";
import ButtonTag from "./Header/ButtonTag";
import { isLogged, loggedUserAtom } from "../atoms/atoms";
import { useSingup, useLogin } from "../hooks/customServHook";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 25%;
`;

const OutForm = styled.form`
  /* border: 1px solid gray; */
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  margin-top: 1rem;
  padding: 1rem;
  ul {
    border-bottom: 1px solid gray;
  }
  a {
    color: hsl(206, 100%, 40%);
    text-decoration: none;
    display: block;
  }
  .decider {
    display: flex;
    justify-content: space-evenly;
    padding: 0.8rem;
    line-height: 1rem;
  }
  .hint {
    padding-top: 1rem;
  }
`;

const siteFile = [
  ["askbuntu.com", "https://askubuntu.com/"],
  ["mathoverflow.com", "https://mathoverflow.net/"],
  ["serverfault.com", "https://serverfault.com/"],
  ["stackapps.com", "https://stackapps.com/"],
  ["stackexchange.com", "https://stackexchange.com/"],
  ["stackoverflow.com", "https://stackoverflow.com/"],
  ["superuser.com", "https://superuser.com/"],
];
const LogOut = () => {
  const navigate = useNavigate();
  const [checkForAll, setCheckForAll] = useState(false);
  const [logged, setLogged] = useRecoilState(isLogged);
  const [user, setUser] = useRecoilState(loggedUserAtom);
  setUser(useLogin());
  console.log("user", user);
  console.log("logged", logged);

  const onClickCheck = (e) => setCheckForAll(!checkForAll);
  const onLogoutClick = (e) => {
    e.preventDefault();
    setLogged(!logged);
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
              <Atag key={idx} name={el[0]} link={el[1]} />
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
