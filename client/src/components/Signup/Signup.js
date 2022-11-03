import styled from "styled-components";
import { useState, useCallback } from "react";
import SignBody from "./SignBody";
// import Thirdparty from "../Login/Thirdparty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
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
  background-color: #f1f2f3;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow-y: scroll;

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
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  font-size: 18px;
  padding: 25px;
  margin-left: 20px;

  .UserinfoWrap {
    width: 100%;
    padding: 5px;
    margin-top: 15px;
  }

  .search-bar__input {
    /* border: none;


    right: 5px;
    overflow: auto;
    z-index: -1;
    font-size: 15px;
     transform: translatey(-130%);
    overflow: auto;
    top: 50%;
    transform: translatey(-50%); */
  }
  .Signuperrer {
    color: red;
    font-size: 14px;
    /* font-weight: bold; */
    outline: #0a95ff;
  }
  .SignUpbtn {
    width: 100%;
    padding: 15px;
    font-size: 18px;
    background-color: #0a95ff;
    border: none;
    color: #fff;
  }
`;

const getRandomNumber = (min, max) => {
  return parseInt(Math.random() * (Number(max) - Number(min) + 2));
};

const Signup = () => {
  //이메일 유효성 검사 아직 x...n
  const [userInfo, setuserInfo] = useState({
    email: "",
    nickName: "",
    password: "",
  });
  // const [ischeck, setIscheck] = useState(false);
  const [passworderr, setPassworderr] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = (key) => (e) => {
    // const { name, value } = e.target;
    // setLogin((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
    setuserInfo({ ...userInfo, [key]: e.target.value });
  };

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

  const SignupHandler = (e) => {
    e.preventDefault();

    if (userInfo.email.length === 0 && userInfo.password.length === 0) {
      setEmailerr("Email cannot be empty.");
      setPassworderr("Password cannot be empty.");
      return;
    } else if (emailRegEx.test(userInfo.email) === false) {
      setEmailerr(`${userInfo.email}is not a valid email address.`);
      console.log("er1");
      //`${userInfo.email}is not a valid email address.`
      return;
    } else if (passwordRegEx.test(userInfo.password) === false) {
      setPassworderr("Please add one of the following");
      console.log("er");
      return;
    }

    axios({
      method: "post",
      url: `${BASE_URL}users/signup`,
      data: {
        email: userInfo.email,
        password: userInfo.password,
        nickName: userInfo.nickName,
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
        console.log(res);
        alert("가입되셨습니다");
        navigate("/");
      })
      .catch((err) => {
        alert("회원 가입에 실패하였습니다.");
        console.log(err);
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
                name="nickName"
                type="text"
                onChange={onChangeHandler("nickName")}
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
                name="email"
                type="text"
                onChange={onChangeHandler("email")}
              />
              {/* <FontAwesomeIcon
                icon={faExclamationCircle}
                className="search-bar__input"
              /> */}
            </label>
            {emailerr === "" ? null : (
              <div className="Signuperrer" color="red">
                {emailerr}
              </div>
            )}
          </div>
          <div className="UserinfoWrap">
            <label htmlFor="password">
              Password <br />
              <InputButton
                active={emailerr}
                className="SignupInput"
                id="password"
                name="password"
                type="password"
                onChange={onChangeHandler("password")}
              />
            </label>
            {passworderr ? (
              <div className="Signuperrer">{passworderr}</div>
            ) : null}
          </div>

          <div className="UserinfoWrap">
            <label htmlFor="confirm_password">
              Confirm Password <br />
              <InputButton
                active={emailerr}
                className="SignupInput"
                id="confirm_password"
                name="confirmPassword"
                type="password"
              />
            </label>
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
