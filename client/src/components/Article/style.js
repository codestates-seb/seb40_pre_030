import styled from "styled-components";

export const ArticleWrapper = styled.div`
  padding-bottom: 5px;
  border-bottom: 1px solid #6c737a;
  .title {
    font-size: 2rem;
    padding: 10px;
  }
  .date_wrapper {
    display: flex;
    padding: 5px;
    padding-bottom: 15px;
    border-bottom: 1px solid #6c737a;
    font-size: 0.8rem;
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
    width: 100%;
    margin-top: 15px;
    font-size: 1.2rem;
    .body-main {
      margin-bottom: 20px;
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
      font-size: 3.3rem;
      color: ;
    }
  }
  .body-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    .Tag-section {
    }
    .post-owner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      float: right;
      background-color: #dceaf6;

      .user-action-item {
        font-size: 1rem;
      }
    }
  }
  img {
    width: 32px;
    height: 32px;
    margin: 8px 8px 0 0;
  }
`;
