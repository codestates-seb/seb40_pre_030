import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../components/Container";
import Navbar from "../components/navbar/Navbar";
import UserCard from "../components/Users/UserCard";
import UserPagination from "../components/Users/UserPagination";
import { STACK_EXCHANGE_URL } from "../util/api";
import TagSkeleton from "./TagSkeleton";

const UserMain = styled.div`
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
  .tags-tab-nav {
    display: flex;
    border: gray solid 1px;
    border-radius: 3px;
  }
  .pagination-wrapper {
    display: flex;
    justify-content: flex-end;
  }
`;

const UserListsWrap = styled.div`
  margin-top: 1rem;
  display: grid;
  justify-content: stretch;
  grid-template-columns: repeat(auto-fill, minmax(14rem, auto));
  gap: 1rem;
  margin: 1.4rem 0 1.4rem 1.8rem;
  .profile {
    display: flex;
    .userImg {
      height: 48px;
      img {
        width: 48px;
        height: 48px;
      }
    }
    .userInfo {
      a {
        color: hsl(206, 85%, 57.5%);
      }
    }
  }
`;

const StyledUsers = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Users() {
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.defaults.withCredentials = false;
    axios
      .get(
        `${STACK_EXCHANGE_URL}users?page=${currentPage}&pagesize=24&order=desc&sort=reputation&inname=${searchText}&site=stackoverflow&key=${process.env.REACT_APP_STACK_API_KEY}`
      )
      .then((res) => {
        const { data } = res;
        setUserData(data.items);
        console.log(data);
      })
      .catch(() => alert("Failed to load user list"));
  }, [currentPage, searchText]);

  const handleChange = (e) => setInputText(e.target.value);

  const onSearch = (e) => {
    e.preventDefault();
    setSearchText(inputText);
  };

  return (
    <StyledUsers>
      <Container>
        <Navbar />
        <UserMain>
          <div className="tags-header">
            <div className="board-title">Users</div>
            <div className="filtertags">
              <form className="search-form" onSubmit={onSearch}>
                <FontAwesomeIcon
                  className="search-icon"
                  icon={faMagnifyingGlass}
                />
                <input
                  className="search-bar"
                  placeholder="Filter by tag name"
                  value={inputText}
                  onChange={handleChange}
                />
              </form>
            </div>
          </div>
          <div className="time"></div>
          {userData.length === 0 && <TagSkeleton />}
          <UserListsWrap>
            {userData &&
              userData.map((v) => <UserCard user={v} key={v.account_id} />)}
          </UserListsWrap>
          <div className="pagination-wrapper">
            <UserPagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </UserMain>
      </Container>
    </StyledUsers>
  );
}
