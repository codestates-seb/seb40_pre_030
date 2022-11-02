import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 25%;
`;

export const OutForm = styled.form`
  /* border: 1px solid gray; */
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
    justify-content: space-evenly;
    padding: 0.8rem;
    line-height: 1rem;
  }
  .hint {
    padding-top: 1rem;
  }
`;

export const SiteLi = styled.li`
  display: flex;
  a {
    color: hsl(206, 100%, 40%);
    text-decoration: none;
    display: flex;
    .siteLogo {
      width: 16px;
      height: 16px;
      background-repeat: no-repeat;
      background-size: 16px;
      background-image: url(https://cdn.sstatic.net/Img/favicons-sprite16.png?v=22475cccbf39);
      background-position: 0 -360px;
    }
  }
`;

// ${(props) => props.position | (0 - 360)}px;
