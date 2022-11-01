import { useState } from "react";
import styled from "styled-components";
import { SearchBar } from "../components/Header/HeaderCotents";
import { UserProfile } from "../components/UserProfile";

const userDummy = [
  {
    nickName: "paul",
    postCount: 30,
    userTag: ["python", "pandas"],
    photoURL:
      "https://w.namu.la/s/4c30cf3fed5c1a9052a52b527b9c3a4ae98534ee72dfbfd8d728cec568db7a657709d8d87507681663b495ed4355acd9049fd552bf810bda0c5252715ba7c634a5e79b21e222dca1fdf34b945146ceaffa04f4c604defd926a0bdcdd7f290978ec649f7517275885f066c43e15d422df",
  },
  {
    nickName: "sam",
    postCount: 40,
    userTag: ["js", "R"],
    photoURL:
      "https://w.namu.la/s/4c30cf3fed5c1a9052a52b527b9c3a4ae98534ee72dfbfd8d728cec568db7a657709d8d87507681663b495ed4355acd9049fd552bf810bda0c5252715ba7c634a5e79b21e222dca1fdf34b945146ceaffa04f4c604defd926a0bdcdd7f290978ec649f7517275885f066c43e15d422df",
  },
  {
    nickName: "paul",
    postCount: 20,
    userTag: ["python", "nodejs"],
    photoURL:
      "https://w.namu.la/s/4c30cf3fed5c1a9052a52b527b9c3a4ae98534ee72dfbfd8d728cec568db7a657709d8d87507681663b495ed4355acd9049fd552bf810bda0c5252715ba7c634a5e79b21e222dca1fdf34b945146ceaffa04f4c604defd926a0bdcdd7f290978ec649f7517275885f066c43e15d422df",
  },
  {
    nickName: "paul",
    postCount: 10,
    userTag: ["next", "react"],
    photoURL:
      "https://w.namu.la/s/4c30cf3fed5c1a9052a52b527b9c3a4ae98534ee72dfbfd8d728cec568db7a657709d8d87507681663b495ed4355acd9049fd552bf810bda0c5252715ba7c634a5e79b21e222dca1fdf34b945146ceaffa04f4c604defd926a0bdcdd7f290978ec649f7517275885f066c43e15d422df",
  },
];

const UserMain = styled.div`
  padding: 40px;
  h1 {
    display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
  .filterbox {
    display: flex;
    /* justify-content: space-around; */
    button {
      background-color: white;
      color: gray;
    }
    .active {
      background-color: lightgray;
    }
  }
`;

const UserListsWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

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
const FilterBox = styled.button`
  box-sizing: border-box;
  height: 100%;
  border: gray solid 1px;
  align-self: center;
  text-align: center;
  background-color: white;
  padding: 0.4rem 0.5rem;
  :hover {
    background-color: lightgray;
  }
`;

export default function Users() {
  const [currentTab, setCurrentTab] = useState(0);
  const buttonOnclick = (idx) => setCurrentTab(idx);

  const buttonNmae = [
    "Reputation",
    "New users",
    "Voters",
    "Editors",
    "Moderators",
  ];

  return (
    <UserMain>
      <h1>Users</h1>
      <div className="filterbox">
        <div>
          <SearchBar placeHolderText="Filter by user" />
        </div>
        {buttonNmae.map((el, idx) => (
          <div className="filterbtn" key={idx}>
            <FilterBox
              className={idx === currentTab ? "active" : "inactive"}
              idx={idx}
              onClick={() => buttonOnclick(idx)}
            >
              {el}
            </FilterBox>
          </div>
        ))}
      </div>
      <div className="time"></div>
      <UserListsWrap>
        {userDummy.map((el, idx) => (
          <div className="profile" key={idx}>
            <div className="userImg">
              <img src={el.photoURL} alt="profile" />
            </div>
            <div className="userInfo">
              <a href="/">{el.nickName}</a>
              <div>{el.postCount}</div>
              {el.userTag.map((ele, i) => (
                <a href="/">{ele}</a>
              ))}
            </div>
          </div>
        ))}
      </UserListsWrap>
    </UserMain>
  );
}
