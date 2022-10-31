import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

// 상위를 a tag에서 div로 변경
const ATagWrap = styled.div`
  color: hsl(206, 85%, 57.5%);
  border: none;
  padding: 0.4rem;
`;

const Atag = ({ name, link, logged, isContent, isHover }) => {
  return (
    <ATagWrap>
      {logged === true ? (
        name === "Products" ? (
          <div>{name}</div> // 다른 테그로 변경 필요
        ) : (
          <div>
            <FontAwesomeIcon icon={name} />
          </div>
        )
      ) : (
        <div>{name}</div>
      )}
    </ATagWrap>
  );
};
export default Atag;
