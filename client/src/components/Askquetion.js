import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  margin: auto;
  background-color: #f1f2f3;
  .Mainsection {
    width: 100vw;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin: auto;
  }
  .Askheader {
    width: 100%;
    height: 100px;
    font-size: 30px;
    display: flex;
    justify-content: left;
    align-items: center;
    background-image: url(https://cdn.sstatic.net/Img/ask/background.svg?v=c56910988bdf);
    background-position: right bottom;
    background-repeat: no-repeat;

    .AskheadTitle {
      margin-left: 25px;
    }
  }
  .MainWrap {
    display: flex;
    flex-flow: row nowrap;
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
        margin-top: 15px;
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
      width: 300px;
      display: flex;
      flex-flow: column nowrap;
      row-gap: 30px;
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
        .TopicBtn {
          border: none;
          background-color: #fff;
          font-size: 13px;
          margin-top: 5px;
          font-weight: bold;
          padding: 10px;
        }
      }
      .AsideSlide {
        padding: 5px;
        font-size: 15px;
      }
      .AsideTitle {
        background-color: #f8f9f9;
        font-size: 17px;
        padding: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid #e4e6e8;
        font-weight: bold;
      }
      .AsideTopicWrap {
        padding: 5px;
      }
      .TopicBtn2 {
        border: none;
        width: 100%;
        background-color: #f1f2f3;
        font-size: 16px;
        box-shadow: grey 0px 0px 3px;
        border-radius: 3px;
        padding: 15px;
      }
    }
  }
`;
const Askquetion = () => {
  const [AskTitle, SetAskTitle] = useState("");
  const [AskBody, SetAskBody] = useState("");
  const textRef = useRef("");
  const AskTitleChange = (event) => {
    SetAskTitle(event.target.value);
  };

  const handleChangeInput = () => {
    SetAskBody(textRef.current.getInstance().getMarkdown());
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
                    {/* <input className='Forminput2' placeholder="Markdown editor"></input> */}
                    <div className="EditorWrap">
                      <Editor
                        ref={textRef}
                        height="500px"
                        initialEditType="markdown"
                        initialValue=""
                        onChange={handleChangeInput}
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
                <div>
                  <button className="Submitbtn">Review your question</button>
                </div>
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
                        <li>
                          <div className="AsideTopic">
                            <button className="TopicBtn">
                              Summarize the problem
                            </button>
                            <span></span>
                            <FontAwesomeIcon icon={faAngleUp} />{" "}
                          </div>
                          <div className="AsideSlide">
                            <ul>
                              <li>1. Include details about your goal</li>
                              <li>2. Describe expected and actual</li>
                              <li>3. results Include any error messages</li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="AsideTopic">
                            <button className="TopicBtn">
                              Describe what you`ve tried
                            </button>
                            <span>
                              <FontAwesomeIcon icon={faAngleUp} />{" "}
                            </span>
                          </div>
                          <div className="AsideSlide">
                            <p>
                              Show what you’ve tried and tell us what you found
                              (on this site or elsewhere) and why it didn’t meet
                              your needs. You can get better answers when you
                              provide research.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="AsideTopic">
                            <button className="TopicBtn">Show some code</button>
                            <span>
                              <FontAwesomeIcon icon={faAngleUp} />{" "}
                            </span>
                          </div>
                          <div className="AsideSlide">
                            <p>
                              When appropriate, share the minimum amount of code
                              others need to reproduce your problem (also called
                              a minimum, reproducible example)
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <button className="TopicBtn2">
                      Have a non-programming question?{" "}
                    </button>
                    <span></span>
                  </div>
                </div>
                <div>
                  <div>
                    <button className="TopicBtn2">More helpful links </button>
                    <span></span>
                  </div>
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
