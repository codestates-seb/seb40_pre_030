import { useState } from "react"
import styled from "styled-components"
import Thirdparty from "./Thirdparty"

const LoginForm = styled.form`
border-radius:10px ;
 width: 20rem;
 height: 17rem;
 background-color: white;
 display: flex;
 justify-content: center;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
 input{
  width: 100%;
  height: 2rem;
  border: 1px solid rgba(198, 199, 199, 1);
  }
.label{
  display: flex;
  width: 100%;
  margin: 0px;
  font-weight: bold;
  font-size: 16px;
}
.inputform{
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-wrap: wrap;
  width: 80%;
  height: 70%;
 }
`

const Labellink =styled.a`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 70%;
    font-size: 12px;
    float: right;
    color: rgba(51, 160, 255, 1);

  `

const Submitbtn = styled.button`
width: 80% ;
height: 2.5rem;
background-color : rgba(51, 160, 255, 1);
border: 1px solid rgba(51, 160, 255, 1);
border-radius: 5px ;
margin: 20px 0px 10px 0px;
color: white;

&:hover{
  background-color: rgba(0, 122, 230, 1);
}
`
const BackgroundLogin = styled.div`
height: 100vh;
background-color: rgba(232, 232, 232, 1);
display: flex;
justify-content: center;
align-items: center;

.Logincontent{
  width: 60%;
  display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

.sublink{
  
  padding: 20px;
}
}

`






const Login =()=>{



const [login, setLogin] = useState({
    userId: '',
    password: '',
  })
  const [errorMessage,setErrorMessage]= useState(false)

  
const onChangeHandler = (key)=>(e)=>{
setLogin({...login, [key]: e.target.value})
}

const submiterrer = ()=>{
  if(!login.userId){
    setErrorMessage('아이디와 비밀번호를 입력하세요')
    return
  }
}
console.log(login)
  
    return(
        <BackgroundLogin >
          
        <div className="Logincontent">
          <Thirdparty />
          <LoginForm onSubmit={(e) => e.preventDefault()}>
          <div className="inputform">
            <span className="label">Email</span>
           <input 
           
            value={login.userId}
             onChange={onChangeHandler('userId')} 
             type="text"
           ></input>
           <div className="label">Password
           <Labellink href="https://stackoverflow.com/users/account-recovery" >Forgot password?</Labellink>
           </div>
           
           
            <input 
            value={login.password}
             onChange={onChangeHandler('password')} 
             type="text"
           ></input> 
          
           </div>
           <Submitbtn type='submit' onClick={submiterrer}>Log in</Submitbtn>
          </LoginForm>
         <div className="sublink">
          Dont't have an account? 
          <a href="https://stackoverflow.com/users/signup?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2f">Sign up</a>
          <div>
          Are you an employer?
          <a href="https://stackoverflow.com/users/signup?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2f">
            Sign up on Talent</a>
            {errorMessage}
            </div>
         </div>
         </div>
          </BackgroundLogin>
    )
}

export default Login