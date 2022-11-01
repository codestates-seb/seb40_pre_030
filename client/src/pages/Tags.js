import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Tagsbody from "../components/tags/Tagsbody";
import { DummyTags } from "../components/tags/dummyTags";
import Navbar from "../components/navbar/Navbar";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: auto 80%;
`;

const Tagcontent = styled.div`
  max-width: 80%;
  margin-bottom: 1rem;

  .tags-header {
    box-sizing: border-box;
    padding-left: 0.8rem;
    margin: 1.4rem 0 2rem 1rem;
    display: flex;
    flex-direction: column;
  }
  .board-title {
    font-size: 1.8rem;
    font-weight: 500;
    margin-top: 7px;
    margin-bottom: 1rem;
  }

  .TagsTitle {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .TagsBody {
    margin: 1rem;
    height: 40%;
  }
  .filtertags {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .Tagscard {
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
`;

const Tags = () => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => setSearchText(e.target.value);

  return (
    <StyledDiv className="Tags">
      <Navbar />
      <Tagcontent>
        <div className="tags-header">
          <div className="board-title">Tags</div>
          <div>
            A tag is a keyword or label that categorizes your question with
            other, similar questions. Using the right tags makes it easier for
            others to find and answer your question.
          </div>
        </div>
        <div className="TagsBody">
          <a href="https://stackoverflow.com/tags/synonyms" className="taglink">
            Show all tag synonyms
          </a>
          <div className="filtertags">
            <form>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input
                className="search-bar"
                placeholder="Search..."
                value={searchText}
                onChange={handleChange}
              />
            </form>
            <div>
              <button className="questions-tab">Popular</button>
              <button className="questions-tab">Name</button>
              <button className="questions-tab">New</button>
            </div>
          </div>
          <div className="Tagscard">
            {DummyTags.map((el) => {
              return (
                <Tagsbody
                  key={el.id}
                  tags={el.tags}
                  tagsbody={el.tagsbody}
                  tagsnum={el.tagsnum}
                  tagsask={el.tagsask}
                />
              );
            })}
          </div>
        </div>
      </Tagcontent>
    </StyledDiv>
  );
};

export default Tags;
