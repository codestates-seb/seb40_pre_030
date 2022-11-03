import styled from "styled-components";

export const ArticleWrapper = styled.div`
  margin: 0px;
  width: 70%;
  padding: 10px;
  border-bottom: 1px solid lightgrey;
  //수정부분

  .sub-content-wapper {
    display: flex;
    flex-direction: row;
  }

  .question-sidebar {
    margin-top: 3rem;
    display: flex;
    flex-direction: row-reverse;
    width: 50%;
  }
  .qustion-content-wapper {
    width: 60vw;
  }

  .title {
    font-size: 2rem;
    padding: 15px;
  }
  .date_wrapper {
    display: flex;
    padding: 5px;
    padding-bottom: 15px;
    border-bottom: 1px solid lightgrey;
    font-size: 0.8rem;
    margin-left: 15px;
    div {
      color: #6c737a;
      margin-right: 1rem;
      > span {
        color: #000;
      }
    }
  }
`;
export const ArticleContent = styled.article`
  display: flex;
  .body-section {
    width: 82%;

    padding-top: 30px;
    font-size: 1rem;
    .body-tag {
      padding-top: 30px;
    }
  }
  .vote-section {
    display: flex;
    margin-left: 15px;
    margin-right: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 1.7rem;
    color: gray;
    .vote-icon {
      font-size: 3rem;
    }
  }
  .body-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .Tag-section {
      position: relative;
      button {
        margin-right: 5px;
        background-color: #fff;
        border: none;
        color: #3d4044;
      }
    }
    .post-owner {
      width: 190px;
      display: flex;
      flex-direction: column;
      float: right;
      background-color: #dceaf6;
      padding: 10px;
      .user-action-item {
        font-size: 0.8rem;
      }
      .user-avatar {
        display: flex;
        align-items: center;
      }
    }
  }
  img {
    width: 35px;
    height: 35px;
    margin: 8px 8px 0 0;
  }
`;
