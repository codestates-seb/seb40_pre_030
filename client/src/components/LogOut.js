import { useState } from "react";
import styled from "styled-components";

import Atag from "./Header/Atag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import {
  faStackExchange,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import ButtonTag from "./Header/ButtonTag";
/*
         <img
              src="https://cdn.sstatic.net/Sites/askubuntu/Img/apple-touch-icon@2.png?v=c492c9229955"
              alt="askubuntu"
            />
            <a href="https://askubuntu.com/">askbuntu.com</a>
            <img
              src="https://www.geol.umd.edu/styles/academicons-192/svg/mathoverflow.svg"
              alt="mathoverflow"
            />
            <a href="https://mathoverflow.net/">mathoverflow.com</a>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/serverfault-3521702-2945146.png"
              alt="serverfault"
            />
            <a href="https://serverfault.com/">serverfault.com</a>
            <FontAwesomeIcon icon={faGear} />
            <a href="https://stackapps.com/">stackapps.com</a>
            <FontAwesomeIcon icon={faStackExchange} />
            <a href="https://stackexchange.com/">stackexchange.com</a>
            <FontAwesomeIcon icon={faStackOverflow} />
            <a href="https://stackoverflow.com/">stackoverflow.com</a>
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_436007.png"
              alt="superuser"
            />
            <a href="https://superuser.com/">superuser.com</a>
*/

const LogOutWrap = styled.div`
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
  const [checkForAll, setCheckForAll] = useState(false);
  const onClick = (e) => setCheckForAll(!checkForAll);
  console.log(checkForAll);

  return (
    <>
      <LogOutWrap>
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
          <input type="checkbox" onClick={onClick} />
          Log out on all devices
          <div className="decider">
            <ButtonTag name="Log out" />
            <Atag name="Cancel" link="http://localhost:3000/" />
          </div>
          <div className="hint">
            <span>
              If you’re on a shared computer, remember to log out of your Open
              ID provider (Facebook, Google, Stack Exchange, etc.) as well.
            </span>
          </div>
        </OutForm>
      </LogOutWrap>
    </>
  );
};

export default LogOut;
