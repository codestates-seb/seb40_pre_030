import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { BASE_URL } from "../../src/util/api";
import axios from "axios";
import { useRecoilState } from "recoil";
import { loginInfo } from "../atoms/atoms";
import { useNavigate } from "react-router";
//아코디언 더미 데이터
const Accordiondata = [
  {
    id: 1,
    title: "Summarize the problem",
    content: `Include details about your goal. Describe expected and actual. Results Include any error messages`,
  },
  {
    id: 2,
    title: "  Describe what you`ve tried",
    content:
      "Show what you’ve tried and tell us what you found(on this site or elsewhere) and why it didn’t meet your needs. You can get better answers when you provide research.",
  },
  {
    id: 3,
    title: "Show some code",
    content:
      " When appropriate, share the minimum amount of code others need to reproduce your problem (also called a minimum, reproducible example)",
  },
];

const Main = styled.main`
  margin: auto;
  background-color: #f1f2f3;
  padding-bottom: 20px;
  button {
    cursor: pointer;
  }
  .Mainsection {
    width: 100%;
    max-width: 1264px;
    display: flex;
    justify-content: center;
    margin: auto;
  }
  .Askheader {
    width: 100%;
    font-size: 30px;
    display: flex;
    padding: 30px;
    align-items: center;
    background-image: url(https://cdn.sstatic.net/Img/ask/background.svg?v=c56910988bdf);
    background-position: right bottom;
    background-repeat: no-repeat;

    .AskheadTitle {
      font-weight: 700;
      margin: 2rem 0;
    }
  }
  .MainWrap {
    display: flex;
    column-gap: 50px;
    .Askform {
      display: flex;
      flex-flow: column;
      flex: 1 1 auto;
      .Formtitle {
        font-weight: bold;
      }
      .EditorWrap {
        margin-top: 15px;
        margin-bottom: 15px;
      }
      .Submitbtn {
        font-size: 15px;
        background-color: #0a95ff;
        border: none;
        border-radius: 2px;
        color: #fff;
        margin: 2rem 0;
        padding: 20px;
      }
      .AskSection {
        width: 100%;
        background-color: white;
        padding: 20px;
        box-shadow: grey 0px 0px 3px;
        border-radius: 3px;
        font-size: 18px;
        .Forminput {
          width: 100%;

          font-size: 18px;
          margin-top: 10px;
          margin-bottom: 15px;
        }
      }
    }
    .Aside {
      width: 330px;
      display: flex;
      flex-flow: column nowrap;
      font-size: 10px;
      margin-left: 15px;

      .Asidewrap {
        box-shadow: grey 0px 0px 3px;
        border-radius: 3px;
        margin-bottom: 20px;
        background-color: #fff;
      }

      .Asidep {
        padding: 5px;
        font-size: 10px;
      }
      .AsideTopic {
        font-size: 13px;
        border-bottom: 1px solid #e4e6e8;
        padding-bottom: 5px;

        display: flex;
        align-items: center;
        padding: 10px;
        .TopicBtn {
          border: none;
          background-color: #fff;
          font-size: 13px;
          margin-top: 5px;
          font-weight: bold;
          margin-right: auto;
        }
      }
      .AsideSlide {
        padding: 15px;
        font-size: 15px;
      }
      .AsideTitle {
        background-color: #f8f9f9;
        font-size: 20px;
        padding: 15px;
        margin-bottom: 5px;
        border-bottom: 1px solid #e4e6e8;
      }
      .AsideTopicWrap {
        padding: 5px;
      }
      .TopicBtn2 {
        border: none;
        width: 100%;
        background-color: #f8f9f9;
        font-size: 16px;
        box-shadow: grey 0px 0px 3px;
        padding: 15px;
        margin-top: 30px;
        text-align: left;
      }
      .TopicContent {
        padding: 15px;
        font-size: 14px;
        background-color: #fff;
        box-shadow: grey 0px 0px 3px;
      }
      .TopicContent > p {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
  }
`;
const Askquetion = () => {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const textRef = useRef("");
  const [TitleId, setTitleId] = useState(0);
  const [TitleOn, setTitleOn] = useState(false);
  const [TitleOn2, setTitleOn2] = useState(false);
  const [userInformation, setUserInformation] = useRecoilState(loginInfo);
  const navigate = useNavigate();
  const accessToken = window.localStorage.getItem("accessToken");

  const AskTitleChange = (event) => {
    settitle(event.target.value);
  };

  const handleChangeInput = () => {
    setbody(textRef.current.getInstance().getMarkdown().trim());
  };

  const TitleClick = (id) => {
    if (id === TitleId) {
      setTitleId(0);
    } else {
      setTitleId(id);
    }
  };

  const TitleOnClick = () => {
    setTitleOn(!TitleOn);
  };

  const TitleOnClick2 = () => {
    setTitleOn2(!TitleOn2);
  };

  const AskHandler = (e) => {
    e.preventDefault();
    if (body.length < 15)
      alert("Please enter at least 15 characters in your answer");
    else {
      axios({
        method: "post",
        url: `${BASE_URL}ask`,
        data: { title, body, photoURL: userInformation.photoURL },
        headers: {
          "ngrok-skip-browser-warning": "skip",
          authorization: accessToken,
        },
      })
        .then(function (response) {
          navigate(`/question/${response.data.boardId}`);
        })
        .catch((err) => {
          console.log(err);
          alert("Failed to write. Try again.");
        });
    }
  };

  return (
    <>
      <Main>
        <section className="Mainsection">
          <div>
            <div className="Askheader">
              <h1 className="AskheadTitle">Ask a public question</h1>
            </div>
            <div className="MainWrap">
              <form className="Askform">
                <section className="AskSection">
                  <div>
                    <div className="AskBodywrap">
                      <label className="Formtitle">Title</label>
                      <p>
                        Be specific and imagine you’re asking a question to
                        another person
                      </p>
                      <div>
                        <input
                          className="Forminput"
                          onChange={AskTitleChange}
                          placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="Formtitle">Body</label>
                    <p>
                      Include all the information someone would need to answer
                      your question
                    </p>

                    <div className="EditorWrap">
                      <Editor
                        ref={textRef}
                        height="500px"
                        initialEditType="markdown"
                        initialValue=" "
                        onChange={handleChangeInput}
                        toolbarItems={[
                          // 툴바 옵션 설정
                          ["bold", "italic", "strike"],
                          ["code", "codeblock"],
                          ["hr", "quote"],
                          ["ul", "ol", "task"],
                        ]}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="Formtitle">Tags</label>
                    <p>
                      Add up to 5 tags to describe what your question is about
                    </p>
                    <input
                      className="Forminput"
                      placeholder="e.g. (angular sql-server string)"
                    ></input>
                  </div>
                </section>
                <form>
                  <button className="Submitbtn" onClick={AskHandler}>
                    Review your question
                  </button>
                </form>
              </form>
              <aside className="Aside">
                <div className="Asidewrap">
                  <div className="AsideTitle">
                    <h3>Step 1: Draft your question</h3>
                  </div>
                  <div className="wrap1">
                    <div className="wrap2">
                      <div>
                        <p className="AsideSlide">
                          The community is here to help you with specific
                          coding, algorithm, or language problems.
                          <br />
                          <br />
                          Avoid asking opinion-based questions.
                        </p>
                      </div>
                      <ol>
                        {Accordiondata.map((items) => {
                          return (
                            <li>
                              <div className="AsideTopic">
                                <button
                                  className="TopicBtn"
                                  onClick={() => TitleClick(items.id)}
                                >
                                  {items.title}
                                </button>
                                <span>
                                  {TitleId === items.id ? (
                                    <FontAwesomeIcon
                                      clasName="Aside-icon"
                                      icon={faAngleDown}
                                    />
                                  ) : (
                                    <FontAwesomeIcon
                                      clasName="Aside-icon"
                                      icon={faAngleUp}
                                    />
                                  )}
                                </span>
                              </div>
                              <div
                                className={
                                  TitleId === items.id ? "AsideSlide" : ""
                                }
                              >
                                {TitleId === items.id ? items.content : ""}
                              </div>
                            </li>
                          );
                        })}
                      </ol>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <button className="TopicBtn2" onClick={TitleOnClick}>
                      Have a non-programming question?
                    </button>
                    <br />

                    {TitleOn ? (
                      <div className="TopicContent">
                        <span>
                          <a href="https://superuser.com/help/on-topic">
                            {" "}
                            Super user
                          </a>
                        </span>
                        <p> Troubleshooting hardware and software issues </p>
                        <span>
                          <a href="https://softwareengineering.stackexchange.com/">
                            {" "}
                            Software engineering
                          </a>
                        </span>
                        <p>
                          {" "}
                          For software development methods and process questions{" "}
                        </p>
                        <span>
                          <a href="https://hardwarerecs.stackexchange.com/help/on-topic">
                            {" "}
                            Hardware recommendations
                          </a>
                        </span>
                        <p>
                          {" "}
                          Software recommendations Ask questions about the site
                          on meta"
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <button className="TopicBtn2" onClick={TitleOnClick2}>
                      More helpful links
                    </button>
                    <br />

                    {TitleOn2 ? (
                      <div className="TopicContent">
                        {" "}
                        <p>
                          <a href="https://superuser.com/help/on-topic">
                            {" "}
                            Find more information about how to ask a good
                            question here
                          </a>
                        </p>
                        <br></br>
                        <p>
                          <a href="https://softwareengineering.stackexchange.com/">
                            {" "}
                            Visit the help center
                          </a>
                        </p>{" "}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <div></div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </Main>
    </>
  );
};
export default Askquetion;
