import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";
import PopUserCard from "../PopUserCard";
import { ReactComponent as Inbox } from "../../assets/inbox.svg";
import { ReactComponent as Trophy } from "../../assets/trophy.svg";
import { ReactComponent as Question } from "../../assets/questionMark.svg";
import { ReactComponent as Bubble } from "../../assets/bubble.svg";

// 상위를 a tag에서 div로 변경
const ATagWrap = styled.div`
  color: hsl(206, 85%, 57.5%);
  border: none;
  /* padding: 0.4rem; */
  .icon {
    color: #525960;
    fill: #525960;
  }
`;

const Atag = ({ name, link, logged, isContent, isHover, className }) => {
  const [open, setOpen] = useState("false");
  const userOnClick = () => {
    setOpen(!open);
  };

  return (
    <div className={className}>
      <ATagWrap>
        {logged === true ? (
          name === "Products" ? (
            <div>{name}</div> // 다른 테그로 변경 필요
          ) : name === "faUser" ? (
            <div onClick={userOnClick}>
              <FontAwesomeIcon
                className="icon"
                icon={faUser}
                onClick={userOnClick}
              />

              {!open && <PopUserCard onClick={userOnClick} />}
            </div>
          ) : name === "faInbox" ? (
            <div>
              <Inbox className="icon" width="20" height="18" />
            </div>
          ) : name === "faTrophy" ? (
            <div>
              <Trophy className="icon" width="18" height="18" />
            </div>
          ) : name === "faFileCircleQuestion" ? (
            <div>
              <Question className="icon" width="18" height="18" />
            </div>
          ) : (
            <div>
              <Bubble className="icon" width="18" height="18" />
            </div>
          )
        ) : (
          <div className={className}>{name}</div>
        )}
      </ATagWrap>
    </div>
  );
};
export default Atag;
