import styled from "styled-components";
import Button from "../Button";
import Question from "./Question";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../util/api";

const StyledQuestionsContainer = styled.div`
  width: 70%;
  min-width: 40rem;
  .questions-header {
    box-sizing: border-box;
    padding-left: 0.8rem;
    margin: 1.4rem 0 2rem 1rem;
    display: flex;
    justify-content: space-between;
  }
  .board-title {
    font-size: 1.8rem;
    font-weight: 500;
    margin-top: 7px;
  }
  .questions-nav-wrapper {
    box-sizing: border-box;
    padding-left: 0.8rem;
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
  .questions-count {
    font-size: 1.2rem;
    margin-left: 1rem;
  }
  .questions-filtering-buttons {
    display: flex;
  }
  .questions-nav {
    display: flex;
    border: gray solid 1px;
    border-radius: 0.2rem;
    margin: 0 1rem;
  }
  .questions-tab {
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
  }
  .icon {
    margin: 0 5px;
  }
  .questions-container {
    min-height: 820px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
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

const QuestionsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSize, setCurrentSize] = useState(15);
  const [allListData, setAllListData] = useState([]);
  const [listData, setListData] = useState([]);
  const sortTab = ["Newest", "Unanswered", "Voted"];
  const [currentTab, setCurrentTab] = useState("newest");
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    if (currentTab === "newest") setListData(allListData);
    if (currentTab === "unanswered") {
      const newList = allListData.filter((v) => v.answer.length === 0);
      setListData(newList);
    }
    if (currentTab === "voted") {
      const newList = allListData.filter((v) => v.voteCount !== 0);
      setListData(newList);
    }
  }, [currentTab, allListData]);

  useEffect(() => {
    const fetch = async () => {
      axios.defaults.withCredentials = true;
      await axios
        .get(`${BASE_URL}?page=${currentPage}&size=${currentSize}`, {
          headers: {
            "ngrok-skip-browser-warning": "skip",
          },
        })
        .then((res) => {
          const { data } = res;
          setListData(data.data);
          setAllListData(data.data);
          setTotalPages(data.pageInfo.totalPages);
        });
    };
    //ask버튼을 누를때 로그인이 안되어있으면 로그인창으로 이동
    fetch();
  }, [currentPage, currentSize]);

  const onTabClick = (tabName) => {
    setCurrentTab(tabName.toLowerCase());
  };

  return (
    <StyledQuestionsContainer className="QuestionsContainer">
      <div className="questions-header">
        <h1 className="board-title">All Questions</h1>

        {window.localStorage.getItem("accessToken") ? (
          <Link to="/ask">
            <Button
              bgcolor={(props) => props.theme.buttonBlue}
              font="white"
              border="none"
              fontSize="15px"
            >
              Ask Question
            </Button>
          </Link>
        ) : (
          <Link to="/users/login">
            <Button
              bgcolor={(props) => props.theme.buttonBlue}
              font="white"
              border="none"
              fontSize="15px"
            >
              Ask Question
            </Button>
          </Link>
        )}
      </div>
      <div className="questions-nav-wrapper">
        <div className="questions-count"> {"23,136,393"} questions</div>
        <div className="questions-filtering-buttons">
          <nav className="questions-nav">
            {sortTab.map((v, idx) => (
              <NavTab
                className="questions-tab"
                onClick={() => onTabClick(v)}
                currentTab={currentTab}
                value={v.toLowerCase()}
                key={idx}
              >
                {v}
              </NavTab>
            ))}
          </nav>
          <Button
            bgcolor={(props) => props.theme.lightBlueTag}
            font={(props) => props.theme.blueFont}
            border={(props) => {
              return props.theme.blueFont + " solid 1px";
            }}
          >
            <FontAwesomeIcon className="icon" icon={faArrowDownWideShort} />
            Filter
          </Button>
        </div>
      </div>

      <ul className="questions-container">
        {listData &&
          listData.map((v) => <Question key={v.boardId} questionItem={v} />)}
        <Pagination
          currentPage={currentPage}
          currentSize={currentSize}
          setCurrentPage={setCurrentPage}
          setCurrentSize={setCurrentSize}
          totalPages={totalPages}
        />
      </ul>
    </StyledQuestionsContainer>
  );
};

export default QuestionsContainer;
