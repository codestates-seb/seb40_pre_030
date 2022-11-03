import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import styled from "styled-components";
import axios from "axios";
import { useState, useRef } from "react";
import { BASE_URL } from "../../util/api";
import { loginStatus } from "../../atoms/atoms";
import { useRecoilState } from "recoil";
import { useNavigate, useParams } from "react-router";

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
const AnswerCreate = () => {
  const [answerBody, SetanswerBody] = useState();
  const Bodydata = useRef();
  const [logged, SetLogged] = useRecoilState(loginStatus);
  const { id } = useParams();
  const navigate = useNavigate();
  const accessToken = window.localStorage.getItem("accessToken");
  const AnswerChange = () => {
    SetanswerBody(Bodydata.current.getInstance().getMarkdown());
  };
  const Answerpost = (authorizationCode) => {
    if (answerBody === undefined || "") {
      window.alert("답변을 입력해주세요!");
    } else {
      axios({
        method: "post",
        url: `${BASE_URL}answers/${id}`,
        data: { answerBody },
        headers: {
          "ngrok-skip-browser-warning": "skip",
          authorization: accessToken,
        },
      }).catch((err) => {
        if (err.response.status === 401) {
          console.log(err.response.data);
        }
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
          <Editor
            onChange={AnswerChange}
            ref={Bodydata}
            height="350px"
            initialEditType="markdown"
            initialValue="　"
          />
          <div className="Postwrap">
            <button className="Postbtn" onClick={Answerpost}>
              Post Your Answer
            </button>
          </div>
        </Createform>
      ) : (
        ""
      )}
    </>
  );
};
export default AnswerCreate;
