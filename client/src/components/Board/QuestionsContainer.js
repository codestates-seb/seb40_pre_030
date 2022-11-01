import styled from "styled-components";
import Button from "../Button";
import Question from "./Question";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownWideShort,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../util/api";

const StyledQuestionsContainer = styled.div`
  width: 100%;
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
`;

const QuestionsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSize, setCurrentSize] = useState(15);
  const [listData, setListData] = useState();
  const pageNow = useLocation().search; // 현재 페이지 또는 페이지 사이즈
  useEffect(() => {
    const num = pageNow.slice(pageNow.indexOf("=") + 1);
    if (pageNow.includes("page")) setCurrentPage(Number(num));
    else if (pageNow.includes("size")) {
      setCurrentSize(Number(num));
      setCurrentPage(1);
    }
  }, [pageNow]);

  useEffect(() => {
    if (!currentPage || !currentSize) {
      setCurrentPage(1);
      setCurrentSize(15);
    }
    return async () => {
      axios.defaults.withCredentials = true;
      axios
        .get(`${BASE_URL}?page=${currentPage}&size=${currentSize}`, {
          headers: {
            "ngrok-skip-browser-warning": "skip",
          },
        })
        .then((res) => {
          const { data } = res;
          setListData(data);
        });
    };
  }, [currentPage, currentSize]);

  return (
    <StyledQuestionsContainer className="QuestionsContainer">
      <div className="questions-header">
        <h1 className="board-title">All Questions</h1>

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
      </div>
      <div className="questions-nav-wrapper">
        <div className="questions-count"> {"23,136,393"} questions</div>
        <div className="questions-filtering-buttons">
          <nav className="questions-nav">
            <button className="questions-tab">Newest</button>
            <button className="questions-tab">Active</button>
            <button className="questions-tab">Bounted{"283"}</button>
            <button className="questions-tab">Unanswered</button>
            <button className="questions-tab">
              More
              <FontAwesomeIcon className="icon" icon={faCaretDown} />
            </button>
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
          listData.map((v, idx) => (
            <Question key={v.postId} questionItem={v} />
          ))}
        <Pagination currentPage={currentPage} currentSize={currentSize} />
      </ul>
    </StyledQuestionsContainer>
  );
};

export default QuestionsContainer;
