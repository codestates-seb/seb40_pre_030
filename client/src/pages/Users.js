import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import UserCard from "../components/Users/UserCard";

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
`;

const UserListsWrap = styled.div`
  margin-top: 1rem;
  display: grid;
  justify-content: stretch;
  grid-template-columns: repeat(auto-fill, minmax(13rem, auto));
  gap: 1rem;

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

const UsersContainer = styled.div`
  display: grid;
  grid-template-columns: auto 80%;
`;

const NavTab = styled.button`
  background-color: ${(props) =>
    props.value === props.currentTab ? "#e3e6e8" : "white"};
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
`;

export default function Users() {
  const [currentTab, setCurrentTab] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [inputText, setInputText] = useState("");
  const buttonOnclick = (idx) => setCurrentTab(idx);
  const handleChange = (e) => setInputText(e.target.value);

  const sortTab = [
    "Reputation",
    "New users",
    "Voters",
    "Editors",
    "Moderators",
  ];

  const onSearch = (e) => {
    e.preventDefault();
    setSearchText(inputText);
  };

  const onTabClick = (tabName) => {
    setCurrentTab(tabName.toLowerCase());
  };

  return (
    <UsersContainer>
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
            <nav className="tags-tab-nav">
              {sortTab.map((v) => (
                <NavTab
                  className="tags-tab"
                  onClick={() => onTabClick(v)}
                  value={v.toLowerCase()}
                  currentTab={currentTab}
                  key={v.toLowerCase()}
                >
                  {v}
                </NavTab>
              ))}
            </nav>
          </div>
        </div>
        <div className="time"></div>
        <UserListsWrap>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </UserListsWrap>
      </UserMain>
    </UsersContainer>
  );
}
