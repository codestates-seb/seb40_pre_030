import styled from "styled-components";

const TagsBox = styled.div`
  width: 15rem;
  height: 10rem;
  margin: 1rem;
  border: 1px solid black;

  .tagsbody {
    overflow: hidden;
    height: 5.5rem;
    margin-top: 0.5rem;
  }

  .tagsNumber {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    color: lightgray;
    margin-top: 0.4rem;
  }
  .tagsnum {
    display: flex;
    flex-wrap: wrap;

    width: 5rem;
    flex-direction: column;
  }
  .tagsask {
    display: flex;
    flex-wrap: wrap;

    width: 8rem;
    flex-direction: column;
  }
`;

const Tagsbody = ({ id, tags, tagsbody, tagsnum, tagsask }) => {
  return (
    <TagsBox>
      <button>{tags}</button>
      <div className="tagsbody">{tagsbody}</div>
      <div className="tagsNumber">
        <div className="tagsnum">{tagsnum} question</div>
        <div className="tagsask">
          {tagsask[0]} asked today, {tagsask[1]} this week
        </div>
      </div>
    </TagsBox>
  );
};

export default Tagsbody;
