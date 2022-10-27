import styled from "styled-components";
import { useState } from "react";
import SignBody from "./SignBody";
import Thirdparty from "../Login/Thirdparty";

const Backgtoundsign = styled.div`
  background-color: rgba(232, 232, 232, 1);
  height: 70rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .signupContent {
    width: 75%;

    height: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .contentfrom {
    height: 100vh;
  }
`;

const Signform = styled.form`
  border-radius: 10px;
  margin-top: 0px;
  width: 19rem;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .from-margin {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 16rem;
    height: 100%;
  }

  input {
    width: 15rem;
    height: 1.8rem;
    margin: 10px 0px 10px 0px;
    border: 1px solid rgba(198, 199, 199, 1);
    border-radius: 5px;
  }

  label {
    font-weight: bold;
  }

  .box {
    width: 16rem;
    height: 12rem;
    background-color: gray;
  }

  .checkbox {
    width: 1rem;
    height: 1rem;
  }
  span {
    color: gray;
    font-size: 0.8rem;
  }
`;

const ClickButton = styled.button`
  width: 16rem;
  height: 2.2rem;
  background-color: rgba(51, 160, 255, 1);
  border: 1px solid rgba(51, 160, 255, 1);
  border-radius: 5px;
  margin: 0.7rem 0px 1rem 0px;
  color: white;
`;

const Signup = () => {
  const [userInfo, setuserInfo] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [ischeck, setIscheck] = useState(false);

  const checkHandler = () => {
    setIscheck(!ischeck);
  };

  return (
    <Backgtoundsign>
      <div className="signupContent">
        <SignBody />
        <div className="contentfrom">
          <Thirdparty />
          <Signform>
            <div className="from-margin">
              <label htmlFor="user-id">
                Display Name <br />
                <input id="user-id" name="username" type="text" />
              </label>
              <label htmlFor="email">
                Email <br />
                <input id="email" name="email" type="email" />
              </label>
              <label htmlFor="password">
                Password <br />
                <input id="password" name="password" type="password" />
              </label>
              <span>
                Passwords must contain at least eight characters, including at
                least 1 letter and 1 number.
              </span>

              <div className="box"></div>
              <div>
                <input type="checkbox" className="checkbox"></input>
                Opt-in to receive occasional product updates, user research
                invitations, company announcements, and digests.
              </div>
              <br />
              {/* <label htmlFor="confirm_password">
                Confirm Password <br />
                <input
                  id="confirm_password"
                  name="confirmPassword"
                  type="password"
                />
              </label> */}
              <br />
              <ClickButton type="submit">Sign up</ClickButton>
              <span>
                By clicking “Sign up”, you agree to our terms of service,
                privacy policy and cookie policy
              </span>
            </div>
          </Signform>
        </div>
      </div>
    </Backgtoundsign>
  );
};

export default Signup;
