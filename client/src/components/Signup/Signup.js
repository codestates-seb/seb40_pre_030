import styled from "styled-components";
import { useState } from "react";
import SignBody from "./SignBody";

const Backgtoundsign = styled.div`
  background-color: #F1F2F3;
 height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .signupContent {
        display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const Signform = styled.form`
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size:18px;
  padding:25px;
  margin-left:20px;
  .UserinfoWrap{
    width:100%;
    padding:5px;
  margin-top:15px;
  }
.SignupInput{
  width:250px;
  padding:5px;
  margin-top:15px;
}
  .SignUpbtn{
    width:100%;
    padding:15px;
    font-size:18px;
    background-color:#0A95FF;
    border:none;
    color:#fff;
   
  }
`;

const Signup = () => {
  const [userInfo, setuserInfo] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <Backgtoundsign>
      <div className="signupContent">
        <SignBody />
        <Signform>
          <div className='UserinfoWrap'>
          <label className='Userlabel' htmlFor="user-id">
            Display Name <br />
            <input className='SignupInput' id="user-id" name="username" type="text" />
          </label>   </div>
          <div className='UserinfoWrap'>

          <label htmlFor="email">
            Email <br />
            <input className='SignupInput' id="email" name="email" type="email" />
          </label></div>
          <div className='UserinfoWrap'>

          <label htmlFor="password">
            Password <br />
            <input className='SignupInput' id="password" name="password" type="password" />
          </label></div>
       
          {/* <span>
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </span> */}
        
          <div className='UserinfoWrap'>
          <label htmlFor="confirm_password">
            Confirm Password <br />
            <input
            className='SignupInput'
              id="confirm_password"
              name="confirmPassword"
              type="password"
            />
          </label></div>
       
          <br />
          <button className='SignUpbtn' type="submit">Sign Up</button>
        </Signform>
      </div>
    </Backgtoundsign>
  );
};

export default Signup;
