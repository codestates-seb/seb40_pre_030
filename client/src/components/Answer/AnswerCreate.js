import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import styled from "styled-components";
import axios from "axios";
import { useState, useRef } from "react";
import { BASE_URL } from "../../util/api";
import { loginStatus } from "../../atoms/atoms";
import { useRecoilState } from "recoil";
import { useParams } from "react-router";

const Createform = styled.div`
  margin: auto;
  float: right;
  padding: 10px;
  .AnswerCreatetitle {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: bold;
  }
  .edit-section {
    width: 100%;
    .toastui-editor-defaultUI {
      max-width: 100%;
      width: 100%;
      .toastui-editor-defaultUI-toolbar {
        button {
          width: 27px;
          height: 27px;
        }
      }
    }
  }
  .Postwrap {
    width: 90%;
    margin-top: 30px;
    .Postbtn {
      font-size: 15px;
      background-color: #0a95ff;
      border: none;
      border-radius: 5px;
      color: #fff;
      margin-top: 15px;
      padding: 15px;
    }
  }
`;

const LoginFirst = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  background-color: #fef6df;
  margin: 1rem 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: #525960;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnswerCreate = () => {
  const [answerBody, SetanswerBody] = useState();
  const Bodydata = useRef();
  const [logged, SetLogged] = useRecoilState(loginStatus);
  const { id } = useParams();
  const accessToken = window.localStorage.getItem("accessToken");

  const AnswerChange = () => {
    SetanswerBody(Bodydata.current.getInstance().getMarkdown().trim());
  };

  const Answerpost = () => {
    if (answerBody.length < 15) {
      alert("Please enter at least 15 characters in your answer");
    } else {
      axios({
        method: "post",
        url: `${BASE_URL}answers/${id}`,
        data: { answerBody },
        headers: {
          "ngrok-skip-browser-warning": "skip",
          authorization: accessToken,
        },
      })
        .then(window.location.reload())
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };

  return (
    <>
      {logged ? (
        <Createform>
          <div className="AnswerCreatetitle">
            <h1>Your answer</h1>
          </div>
          <div className="edit-section">
            <Editor
              onChange={AnswerChange}
              ref={Bodydata}
              width="100px"
              height="350px"
              initialEditType="markdown"
              initialValue="　"
            />
          </div>
          <div className="Postwrap">
            <button className="Postbtn" onClick={Answerpost}>
              Post Your Answer
            </button>
          </div>
        </Createform>
      ) : (
        <LoginFirst>"Log in to write comments."</LoginFirst>
      )}
    </>
  );
};
export default AnswerCreate;
