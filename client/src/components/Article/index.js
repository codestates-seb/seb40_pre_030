import { ArticleContent, ArticleWrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../util/api";
import { useNavigate, useParams } from "react-router";
import Bubble from "./Bubble";
import { useRecoilState } from "recoil";
import { currentQuestionState, loginInfo } from "../../atoms/atoms";
import { calculateTime } from "../Board/util/calculateTime";

const dummyArticle = {
  post_id: 1,
  createdAt: "2022. 10. 26",
  modifiedAt: "2022. 10. 27",
  title: "how to write stackoverflow",
  body: `this is the longest body`,
  displayName: "admin",
  photoURL:
    "https://w.namu.la/s/4c30cf3fed5c1a9052a52b527b9c3a4ae98534ee72dfbfd8d728cec568db7a657709d8d87507681663b495ed4355acd9049fd552bf810bda0c5252715ba7c634a5e79b21e222dca1fdf34b945146ceaffa04f4c604defd926a0bdcdd7f290978ec649f7517275885f066c43e15d422df",
  voteCount: 3,
  tag: ["reactjs", "testing"],
};

const data = `
# 헤딩
***굵게***
`;

const Button = ({ value, setOpenShare }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useRecoilState(loginInfo);
  const [currentQuestion, setCurrentQuestion] =
    useRecoilState(currentQuestionState);
  const accessToken = window.localStorage.getItem("accessToken");

  const onButtonClick = (value) => {
    if (value === "Share") setOpenShare((pre) => !pre);
    if (value === "Edit") {
      if (currentUser.userId === currentQuestion.userId)
        navigate(`/question/${id}/edit`);
      else alert("You can only edit or delete your own!");
    }
    if (value === "Delete") {
      if (currentUser.userId === currentQuestion.userId) {
        axios
          .delete(`${BASE_URL}${id}`, {
            headers: {
              authorization: accessToken,
            },
          })
          .then((res) => {
            navigate("/");
          });
      } else alert("You can only edit or delete your own!");
    }
  };

  return <button onClick={() => onButtonClick(value)}>{value}</button>;
};

const Article = () => {
  const [ArticleData, setArticleData] = useState("");
  const [openShare, setOpenShare] = useState(false);
  const UpdateArticleValues = ["Share", "Edit", "Delete"];
  const [currentQuestion, setCurrentQuestion] =
    useRecoilState(currentQuestionState);
  const { id } = useParams();

  window.scrollTo(0, 0);
  useEffect(() => {
    axios.defaults.withCredentials = true;

    axios
      .get(`${BASE_URL}${id}`, {
        headers: {
          "ngrok-skip-browser-warning": "skip",
        },
      })
      .then((res) => {
        const { data } = res;
        setArticleData(data);
        setCurrentQuestion(data);
      });
  }, [id]);

  const onVoteClick = (value) => {
    if (value === "Up")
      setArticleData({
        ...ArticleData,
        voteCount: ArticleData.voteCount + 1,
      });
    if (value === "Down")
      setArticleData({
        ...ArticleData,
        voteCount: ArticleData.voteCount - 1,
      });
    axios.patch(`${BASE_URL}${id}/vote${value}`, {
      headers: {
        "ngrok-skip-browser-warning": "skip",
      },
    });
  };

  return (
    <ArticleWrapper>
      <div className="title">{ArticleData.title}</div>
      <div>
        <div className="date_wrapper">
          <div>
            Asked
            <span>
              {/* {ArticleData && ArticleData.createdAt.toLocaleString("ko-kr")} */}

              {calculateTime(new Date(ArticleData.createdAt)).toLocaleString(
                "ko-KR",
                {
                  timeZone: "UTC",
                }
              )}
            </span>
          </div>
          <div>
            Modified{" "}
            <span>
              {calculateTime(new Date(ArticleData.modifiedAt)).toLocaleString(
                "ko-KR",
                {
                  timeZone: "UTC",
                }
              )}
            </span>
          </div>
        </div>
        <ArticleContent>
          <div className="vote-section">
            <FontAwesomeIcon
              className="vote-icon"
              icon={faCaretUp}
              onClick={() => onVoteClick("Up")}
            />
            {ArticleData.voteCount}
            <FontAwesomeIcon
              className="vote-icon"
              icon={faCaretDown}
              onClick={() => onVoteClick("Down")}
            />
          </div>
          <div className="body-section">
            <div className="body-main">{ArticleData.body}</div>
            <div className="body-tag"></div>
            <div className="body-footer">
              <div className="Tag-section">
                {UpdateArticleValues.map((v) => (
                  <Button key={v} value={v} setOpenShare={setOpenShare} />
                ))}
                {/* 배포 후 글 주소 기재하기 */}
                {openShare && <Bubble link="글 주소 기재" />}
              </div>
              <div className="post-owner">
                <div className="user-action-item">
                  asked 2022-11-01T01:31:27
                </div>
                <div className="user-avatar">
                  <img src={ArticleData.photoURL} alt="" />
                  {ArticleData.nickName}
                </div>
              </div>
            </div>
          </div>
        </ArticleContent>
      </div>
    </ArticleWrapper>
  );
};
export default Article;
