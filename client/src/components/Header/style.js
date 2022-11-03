import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.headerBg};
  height: 50px;
  nav {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .nav_item {
      width: 150px;
      height: 30px;
      background-image: ${(props) => props.theme.sprites};
      background-position: 0 -500px;
      padding: 0 8px;
    }
    a {
      //버튼때문에 스타일바꿈
      color: black;
      text-decoration: none;
      border-radius: 1000px;
      border: none;
      padding: 6px 12px;
      margin: 0px;
      font-size: 0.8em;
      //hover의 색변경
      :hover {
        background-color: rgba(222, 222, 222, 0.98);
        border-radius: 0px;
      }
    }
    form {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: relative;
      border: 1px solid black;
      padding: 7px 9px;
      flex-grow: 1;
      margin: 0 8px;
      background-color: white;
    }
    input {
      padding-left: 1rem;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      font-size: 80%;
    }
    svg {
      cursor: text;
      background-color: white;
    }
  }
`;
