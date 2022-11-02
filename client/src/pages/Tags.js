import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Tagsbody from "../components/tags/Tagsbody";
import Navbar from "../components/navbar/Navbar";
import TagPagination from "../components/tags/TagPagination";
import axios from "axios";
import { STACK_EXCHANGE_URL } from "../util/api";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: auto 80%;
`;

const Tagcontent = styled.div`
  max-width: 95%;
  margin-bottom: 1rem;

  .tags-header {
    box-sizing: border-box;
    padding-left: 0.8rem;
    margin: 1.4rem 0 0 1rem;
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
    margin: 1.4rem;
  }

  .taglink {
    text-decoration: none;
    color: ${(props) => props.theme.blueFont};
  }

  .filtertags {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .search-form {
    display: grid;
    align-items: center;
    .search-icon {
      color: ${(props) => props.theme.grayFont};
      position: relative;
      left: 10px;
      grid-column: 1/2;
      grid-row: 1/2;
      z-index: 1;
    }
    input {
      border: ${(props) => props.theme.searchBarBorder + " solid 1px"};
      border-radius: 3px;
      padding: 0.6rem 0.5rem 0.6rem 1.8rem;
      grid-column: 1/2;
      grid-row: 1/2;
      &::placeholder {
        display: none;
        color: #9fa6ad;
      }
      &:focus {
        border-color: #6bbbf7;
        outline: #cde9fe solid 4px;
      }
    }
  }
  .questions-nav {
    display: flex;
    border: gray solid 1px;
    border-radius: 3px;
  }
  .questions-tab {
    background-color: white;
    box-sizing: border-box;
    height: 100%;
    border: none;
    border-right: gray solid 1px;
    align-self: center;
    text-align: center;
    padding: 0.4rem 0.5rem;
    :last-child {
      border-right: none;
    }
    &:focus {
      outline: rgba(35, 38, 41, 0.1) solid 4px;
    }
  }
  .Tagscard {
    margin-top: 1rem;
    display: grid;
    justify-content: stretch;
    grid-template-columns: repeat(auto-fill, minmax(10rem, auto));
    gap: 1rem;
  }
  .pagination-wrapper {
    display: flex;
    justify-content: flex-end;
  }
`;

const Tags = () => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => setSearchText(e.target.value);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState("popular");
  const [tagData, setTagData] = useState([]);
  const sortTab = ["Popular", "Name", "New"];

  useEffect(() => {
    axios.defaults.withCredentials = false;
    axios
      .get(
        `${STACK_EXCHANGE_URL}tags?page=${currentPage}&pagesize=50&order=desc&sort=${currentTab}&inname=${searchText}&site=stackoverflow&key=${process.env.REACT_APP_STACK_API_KEY}`
      )
      .then((res) => {
        const { data } = res;
        setTagData(data.items);
        console.log(data);
      })
      .catch(() => alert("Failed to load tag list"));
  }, [currentPage, currentTab, searchText]);

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
            <form className="search-form">
              <FontAwesomeIcon
                className="search-icon"
                icon={faMagnifyingGlass}
              />
              <input
                className="search-bar"
                placeholder="Filter by tag name"
                value={searchText}
                onChange={handleChange}
              />
            </form>
            <nav className="questions-nav">
              {sortTab.map((v) => (
                <button className="questions-tab" key={v.toLowerCase()}>
                  {v}
                </button>
              ))}
            </nav>
          </div>
          <div className="Tagscard">
            {tagData &&
              tagData.map((el) => {
                return <Tagsbody data={el} key={el.name} />;
              })}
          </div>
        </div>
        <div className="pagination-wrapper">
          <TagPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </Tagcontent>
    </StyledDiv>
  );
};

export default Tags;
