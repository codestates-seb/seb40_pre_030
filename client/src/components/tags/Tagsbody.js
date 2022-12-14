import styled from "styled-components";
import Tag from "./Tag";

const TagsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 3.5rem;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 12px;
  :hover {
    background-color: #f9f9f9;
  }

  .tagsnum {
    color: ${(props) => props.theme.grayFont};
    margin-top: 1rem;
    font-size: 0.8rem;
  }
`;

const Tagsbody = ({ data }) => {
  return (
    <TagsBox>
      <Tag value={data.name} />
      <div className="tagsnum">
        {data.count.toLocaleString("ko-KR")} questions
      </div>
    </TagsBox>
  );
};

export default Tagsbody;
