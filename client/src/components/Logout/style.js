import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: hsl(210, 8%, 95%);
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 35%;
  .notice {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.61538462rem;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    width: 700px;
    line-height: 2.5rem;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: auto !important;
      margin-right: auto !important;
    }
  }
`;

export const OutForm = styled.form`
  background-color: white;
  width: 300px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  margin-top: 1rem;
  padding: 1rem;
  ul {
    border-bottom: 1px solid gray;
    .siteLogo {
      background-image: "cdn.sstatic.net/Img/favicons-sprite16.png?v=22475cccbf39";
    }
  }
  .decider {
    display: flex;
    align-items: center;
    padding: 0.8rem;
    line-height: 1rem;
    .cancelbtn {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: hsl(206, 100%, 40%);
      padding-top: 4px;
      width: 56px;
      height: 35px;
      :hover {
        background-color: ${(props) => props.theme.headerhovergray};
      }
    }
  }
  .hint {
    padding-top: 1rem;
    color: gray;
  }
  .checkbox {
    margin-top: 1rem;
  }
`;

export const SiteLi = styled.li`
  display: flex;
  a {
    color: hsl(206, 100%, 40%);
    text-decoration: none;
    display: flex;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    .siteLogo {
      width: 16px;
      height: 16px;
      background-repeat: no-repeat;
      background-size: 16px;
      background-image: url(https://cdn.sstatic.net/Img/favicons-sprite16.png?v=22475cccbf39);
      background-position: ${(props) => props.posistion | null}
        ${(props) => props.position2 | null}px;
    }
    .siteName {
      margin-left: 0.5rem;
    }
  }
  .cancelbtn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
