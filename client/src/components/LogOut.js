import { useState } from "react"
import styled from "styled-components"
import Atag from "./Header/Atag"

const LogOutWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const OutForm = styled.form`
  border: 1px solid gray;
  padding: 1rem;
  ul{
    border-bottom: 1px solid gray;
  }
  a{
    color: black;
    text-decoration : none;
  }
`

const siteFile = ['ask buntu.com', 'mathoverflow.com', 'serverfault.com', 'stackapps.com', 'stackexchange.com', 'stackoverflow.com', ]
const LogOut = () => {
  const [checkForAll, setCheckForAll] = useState(false);
  const onClick = (e) => setCheckForAll(!checkForAll)
  console.log(checkForAll);

  return(
    <LogOutWrap>
      <div>Clicking “Log out” will log you out of the following domains on this device:</div>
      <OutForm>
        <ul>
          <div>askbuntu.com</div>
          <div>mathoverflow.com</div>
          <div>serverfault.com</div>
          <div>stackapps.com</div>
          <div>stackexchange.com</div>
          <div>stackoverflow.com</div>
          <div>superuser.com</div>
        </ul>
        <input type='checkbox' onClick={onClick} />Log out on all devices
        <div>
          <button>Log out</button>
          <Atag name='Cancel' link='http://localhost:3000/' />
        </div>
      </OutForm>
    
    </LogOutWrap>
  )
}

export default LogOut;