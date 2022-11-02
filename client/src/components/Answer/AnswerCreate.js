import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import styled from "styled-components";
import axios from "axios";
import { useState, useRef } from "react";
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
  const [Answerbody, SetAnswerbody] = useState();
  const Bodydata = useRef();
  const AnswerChange = () => {
    SetAnswerbody(Bodydata.current.getInstance().getMarkdown());
  };
  const Answerpost = () => {
    axios
      .post("https://localhost:4000/", { Answerbody })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        if (err.response.status === 401) {
          console.log(err.response.data);
        }
      });
  };

  return (
    <>
      <Createform>
        <div className="AnswerCreatetitle">
          <h1>Your answer</h1>
        </div>
        <Editor
          onChange={AnswerChange}
          ref={Bodydata}
          height="350px"
          initialEditType="markdown"
          initialValue=""
        />
        <div className="Postwrap">
          <button className="Postbtn">Post Your Answer</button>
        </div>
      </Createform>
    </>
  );
};
export default AnswerCreate;
