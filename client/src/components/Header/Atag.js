import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";
import Card from "../PopUserCard/card";

// 상위를 a tag에서 div로 변경
const ATagWrap = styled.div`
  color: hsl(206, 85%, 57.5%);
  border: none;
  /* padding: 0.4rem; */
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
          ) : name === faUser ? (
            <div onClick={userOnClick}>
              <FontAwesomeIcon icon={name} onClick={userOnClick} />
              {!open && <Card onClick={userOnClick} />}
            </div>
          ) : (
            <div>
              <FontAwesomeIcon icon={name} />
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
