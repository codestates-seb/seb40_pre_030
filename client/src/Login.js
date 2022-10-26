import { useState } from "react"


const Login =()=>{

const [login, setLogin] = useState({
    userId: '',
    password: '',
  })



  
    return(
        <div>
          <from>
           <input 
            value={login}
           ></input> 
          </from>  
        </div>
    )
}

export default Login