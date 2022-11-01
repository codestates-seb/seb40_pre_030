import styled from "styled-components";

const StyledTag = styled.button`
  background-color: hsl(205, 46%, 92%);
  color: ${(props) => props.theme.tagBlueFont};
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  border: none;
  border-radius: 0.2rem;
  padding: 0.3rem;
  margin-right: 0.3rem;
`;

const Tag = ({ value }) => {
  return <StyledTag className="Tag">{value}</StyledTag>;
};

export default Tag;
