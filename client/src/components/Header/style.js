import styled from "styled-components";

export const HeaderWrapper = styled.div`
  /* position: fixed;
  top: 0; */
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.headerBg};
  height: 50px;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  nav {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    div {
      color: black;
    }
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
    .loginbtn {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      width: 60px;
      height: 35px;
      border: solid 1px;
      border-radius: 3px;
      color: hsl(205, 47%, 42%);
      background-color: hsl(205, 46%, 92%);
      border-color: hsl(205, 41%, 63%);
      box-shadow: 0 1px 0 0 hsl(0deg 0% 100% / 70%);
      :hover {
        background-color: hsl(205, 41%, 63%);
      }
      .logtxt {
        color: hsl(205, 47%, 42%);
      }
    }
    .signupbtn {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      width: 60px;
      height: 35px;
      color: white;
      border: solid 1px;
      border-radius: 3px;
      border-color: hsl(206, 100%, 52%);
      background-color: hsl(206, 100%, 52%);
      box-shadow: 0 1px 0 0 hsl(0deg 0% 100% / 70%);
      :hover {
        background-color: hsl(206, 100%, 40%);
      }
      .signtxt {
        color: white;
      }
    }
  }
`;
