import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  nav{
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    .nav_item{
      margin-right: 1rem;
    }
    a{
      color: black;
      text-decoration : none;
      border-radius: 1000px;
      border: none;
      :hover{
        background-color: red;
      }
    }
    form {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: relative;
      border: 1px solid black
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
`