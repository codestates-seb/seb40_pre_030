import styled from "styled-components";
import Tag from "./Tag";

const TagsBox = styled.div`
  width: 15rem;
  height: 10rem;
  margin: 1rem;
  border: 1px solid black;
  .tagsnum {
    display: flex;
    flex-wrap: wrap;

    width: 5rem;
    flex-direction: column;
  }
`;

const Tagsbody = ({ data }) => {
  return (
    <TagsBox>
      <Tag value={data.name} />
      <div className="tagsnum">{data.count} questions</div>
    </TagsBox>
  );
};

export default Tagsbody;
