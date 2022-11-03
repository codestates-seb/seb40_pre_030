import Tag from "../tags/Tag";
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
import AnswersContainer from "../Answer/AnswersContainer";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

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
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    return async () => {
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
    };
  }, [id]);

  const handleUpClick = () => {
    axios.patch(`${BASE_URL}${id}/voteUp`).then((response) => {
      navigate(`/question/${id}`);
    });
  };
  const handleDownClick = () => {
    axios.patch(`${BASE_URL}${id}/voteDown`).then((response) => {
      navigate(`/question/${id}`);
    });
  };

  return (
    <ArticleWrapper>
      <div className="title">
        {ArticleData.title}
        <Link to="/ask">
          <button className="AskQuestion">Ask Question </button>
        </Link>
      </div>
      <div className="sub-content-wapper">
        <div className="qustion-content-wapper">
          <div className="date_wrapper">
            <div>
              Asked<span>1 days ago</span>
            </div>
            <div>
              Modified <span>today</span>
            </div>
            <div>
              Viewed <span>279 times</span>
            </div>
          </div>
          <ArticleContent>
            <div className="vote-section">
              <FontAwesomeIcon
                className="vote-icon"
                icon={faCaretUp}
                onClick={handleUpClick}
              />
              {ArticleData.voteCount}
              <FontAwesomeIcon
                className="vote-icon"
                icon={faCaretDown}
                onClick={handleDownClick}
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
          <AnswersContainer />
        </div>
        <div className="question-sidebar">
          <Sidebar />
        </div>
      </div>
      {/* <div>
        <Sidebar />
      </div> */}
    </ArticleWrapper>
  );
};
export default Article;
