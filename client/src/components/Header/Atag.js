import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ATagnWrap = styled.a`
  color: white;
  border: none;
  padding: 0.4rem;
`;

const Atag = ({ name, link, logged, isContent, isHover }) => {
  return (
    <ATagnWrap>
      {logged === true ? (
        name === "Products" ? (
          <a href={link}>{name}</a>
        ) : (
          <a href={link}>
            <FontAwesomeIcon icon={name} />
          </a>
        )
      ) : (
        <a href={link}>{name}</a>
      )}
    </ATagnWrap>
  );
};
export default Atag;
