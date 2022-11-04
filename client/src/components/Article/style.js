import styled from "styled-components";

export const ArticleWrapper = styled.div`
  max-width: 100%;
  padding: 10px;
  border-bottom: 1px solid lightgrey;

  .sub-content-wapper {
    display: flex;
    flex-direction: row;
  }

  .body-main {
    min-height: 200px;
  }

  .question-sidebar {
    margin-top: 3rem;
    display: flex;
    flex-direction: row-reverse;
    width: 30vw;
  }
  .qustion-content-wapper {
    width: 60vw;
  }

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    padding: 15px;
  }

  .AskQuestion {
    width: 100px;
    height: 2rem;
    background-color: ${(props) => props.theme.buttonBlue};
    font-size: 12px;
    border: none;
    border-radius: 3px;
    color: white;
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
  display: grid;
  grid-template-columns: 5.5rem auto;
  .body-section {
    width: 90%;
    grid-column: 2/3;
    grid-row: 1/2;

    padding-top: 30px;
    font-size: 1rem;
    .body-tag {
      padding-top: 30px;
    }
  }
  .vote-section {
    height: fit-content;
    display: flex;
    margin-left: 15px;
    margin-right: 15px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    font-size: 1.7rem;
    color: gray;
    grid-column: 1/2;
    grid-row: 1/2;
    .vote-icon {
      font-size: 3rem;
    }
  }
  .body-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    grid-column: 1/3;
    grid-row: 2/3;

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
      border-radius: 3px;
      float: right;
      background-color: #dceaf6;
      padding: 10px;
      .user-action-item {
        font-size: 0.8rem;
      }
      .user-avatar {
        color: ${(props) => props.theme.blueFont};
        font-weight: 600;
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
