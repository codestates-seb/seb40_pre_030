import styled from "styled-components";
import { useState } from "react";
import SignBody from "./SignBody";
import { useNavigate } from "react-router";
import axios from "axios";
import { BASE_URL } from "../../util/api";

const InputButton = styled.input`
  width: 250px;
  padding: 5px;
  margin-top: 15px;

  border: 1px solid gray;
  &:focus {
    outline: ${(props) =>
        props.active !== "" ? "rgba(252, 136, 136, 0.6)" : "#cde9fe"}
      solid 4px;
  }
  border: ${(props) =>
      props.active !== "" ? "rgba(252, 136, 136, 0.6)" : "lightgray"}
    solid 1px;
`;

const Backgtoundsign = styled.div`
  background-color: #f2f2f3;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .signupContent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .contentfrom {
    height: 100vh;
  }
`;

const Signform = styled.form`
  border-radius: 10px;
  background-color: white;
  font-size: 18px;
  padding: 25px;
  margin-left: 20px;

  .UserinfoWrap {
    width: 100%;
    padding: 5px;
    margin-top: 15px;
  }

  .Signuperrer {
    color: red;
    font-size: 14px;
    outline: #0a95ff;
  }
  .SignUpbtn {
    width: 100%;
    padding: 15px;
    font-size: 18px;
    background-color: #0a95ff;
    border-radius: 3px;
    border: none;
    color: #fff;

    &:hover {
      background-color: #0968dc;
    }
  }
`;

const getRandomNumber = (min, max) => {
  return parseInt(Math.random() * (Number(max) - Number(min) + 2));
};

const Signup = () => {
  const [useremail, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const [passworderr, setPassworderr] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const navigate = useNavigate();
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

  const handleDisplayNameChange = (e) => {
    setNickName(e.target.value);
  };

  const handleEmailChange = (e) => {
    if (!emailRegEx.test(e.target.value)) {
      setEmailerr(`${useremail} is not a valid email address.`);
    } else {
      setEmailerr("");
    }
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    if (!passwordRegEx.test(e.target.value)) {
      setPassworderr("Please add one of the following things");
    } else {
      setPassworderr("");
    }
    setUserPassword(e.target.value);
  };

  const SignupHandler = (e) => {
    e.preventDefault();

    if (useremail.length === 0 && userpassword.length === 0) {
      setEmailerr("Email cannot be empty.");
      setPassworderr("Password cannot be empty.");
      return;
    }

    axios({
      method: "post",
      url: `${BASE_URL}users/signup`,
      data: {
        email: useremail,
        password: userpassword,
        nickName: nickName,
        photoURL: `https://randomuser.me/api/portraits/women/${getRandomNumber(
          1,
          98
        )}.jpg`,
      },
      headers: {
        "ngrok-skip-browser-warning": "skip",
      },
    })
      .then((res) => {
        alert("Welcome to Shark Overflow");
        navigate("/");
      })
      .catch((err) => {
        alert("Your membership has failed. Please try again.");
      });
  };

  return (
    <Backgtoundsign>
      <div className="signupContent">
        <SignBody />
        <Signform onSubmit={SignupHandler}>
          <div className="UserinfoWrap">
            <label className="Userlabel" htmlFor="user-id">
              Display Name <br />
              <InputButton
                active={emailerr}
                className="SignupInput"
                id="user-id"
                type="text"
                onChange={handleDisplayNameChange}
              />
            </label>
          </div>
          <div className="UserinfoWrap">
            <label htmlFor="email">
              Email <br />
              <InputButton
                active={emailerr}
                className="SignupInput"
                id="email"
                type="text"
                onChange={handleEmailChange}
              />
            </label>
            {emailerr === "" ? null : (
              <div className="Signuperrer">{emailerr}</div>
            )}
          </div>
          <div className="UserinfoWrap">
            <label htmlFor="password">
              Password <br />
              <InputButton
                active={passworderr}
                className="SignupInput"
                id="password"
                type="password"
                onChange={handlePasswordChange}
              />
            </label>
            {passworderr ? (
              <div className="Signuperrer">{passworderr}</div>
            ) : null}
          </div>
          <br />
          <button className="SignUpbtn" type="submit" onChange={SignupHandler}>
            Sign Up
          </button>
        </Signform>
      </div>
    </Backgtoundsign>
  );
};

export default Signup;
