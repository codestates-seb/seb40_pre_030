import styled from "styled-components";
import { useState } from "react";
import SignBody from "./SignBody";

const Backgtoundsign = styled.div`
  background-color: rgba(232, 232, 232, 1);
  height: 70rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .signupContent {
    width: 75%;
    background-color: red;
    height: 90%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
  }
`;

const Signform = styled.form`
  border-radius: 10px;
  width: 40%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
          {/* <span>
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </span> */}
          <br />
          <label htmlFor="confirm_password">
            Confirm Password <br />
            <input
              id="confirm_password"
              name="confirmPassword"
              type="password"
            />
          </label>
          <br />
          <button type="submit">Register</button>
        </Signform>
      </div>
    </Backgtoundsign>
  );
};

export default Signup;
