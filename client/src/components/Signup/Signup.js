import styled from "styled-components";
import { useEffect, useState } from "react";
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
  height: 350px;
  border-radius: 10px;
  background-color: white;
  font-size: 18px;
  padding: 25px;
  margin-left: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 0.7fr;

  .UserinfoWrap {
    width: 100%;
    /* padding: 5px; */
  }

  .Signuperrer {
    max-width: 250px;
    height: 20px;
    color: red;
    font-size: 14px;
    outline: #0a95ff;
    word-break: break-all;
    margin-top: 10px;
  }
  .SignUpbtn {
    height: 50px;
    width: 100%;
    padding: 15px;
    font-size: 18px;
    background-color: #0a95ff;
    border-radius: 3px;
    border: none;
    color: #fff;
    align-self: flex-end;

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
    setUserEmail(e.target.value);
  };

  useEffect(() => {
    if ((useremail !== "") & !emailRegEx.test(useremail)) {
      setEmailerr(`${useremail} is not valid.`);
    } else {
      setEmailerr("");
    }
  }, [useremail]);

  const handlePasswordChange = (e) => {
    if (!passwordRegEx.test(e.target.value)) {
      setPassworderr(
        "8 to 20 including alphabet, numbers, and special characters"
      );
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
        navigate("/users/login");
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
                value={useremail}
                onChange={handleEmailChange}
                maxLength="27"
              />
            </label>
            <div className="Signuperrer">{emailerr ? emailerr : " "}</div>
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
                maxLength="20"
              />
            </label>
            <div className="Signuperrer">{passworderr ? passworderr : " "}</div>
          </div>

          <button className="SignUpbtn" type="submit" onChange={SignupHandler}>
            Sign Up
          </button>
        </Signform>
      </div>
    </Backgtoundsign>
  );
};

export default Signup;
