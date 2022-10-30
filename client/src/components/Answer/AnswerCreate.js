import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import styled from "styled-components";

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
  return (
    <>
      <Createform>
        <div className="AnswerCreatetitle">
          <h1>Your answer</h1>
        </div>
        <Editor height="350px" initialEditType="markdown" initialValue="" />
        <div className="Postwrap">
          <button className="Postbtn">Post Your Answer</button>
        </div>
      </Createform>
    </>
  );
};
export default AnswerCreate;
