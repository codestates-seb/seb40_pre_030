import styled from "styled-components";

export const HeaderWrapper = styled.div`
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
      height: 50px;
      padding: 10px 10px;
      background-image: ${(props) => props.theme.sprites};
      background-position: 0 -493px;
      background-repeat: no-repeat;
      padding: 0 8px;
      :hover {
        background-color: ${(props) => props.theme.headerhovergray};
      }
    }
    a {
      color: black;
      text-decoration: none;
      border: none;
      padding: 6px 12px;
      margin: 0px;
      font-size: 0.8em;
    }
    .hovergray_nav {
      margin: 0.4rem;
      padding-top: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      :hover {
        border-radius: 1000px;
        background-color: ${(props) => props.theme.headerhovergray};
      }
    }
    .hovergray_cont {
      padding: 0;
      display: flex;
      box-sizing: border-box;
      /* align-items: center; */
      /* justify-content: center; */
      svg {
        background-color: ${(props) => props.theme.headerBg};
        padding: 18px 0.6rem !important;
        :hover {
          background-color: ${(props) => props.theme.headerhovergray};
        }
      }
      /* :hover {
        background-color: ${(props) => props.theme.headerhovergray};
      } */
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
