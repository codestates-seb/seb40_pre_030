import styled from "styled-components";
import { useState } from "react";
import SignBody from "./SignBody";
// import Thirdparty from "../Login/Thirdparty";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import axios from "axios";
import { BASE_URL } from "../../util/api";

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
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 18px;
  padding: 25px;
  margin-left: 20px;
  .UserinfoWrap {
    width: 100%;
    padding: 5px;
    margin-top: 15px;
  }
  .SignupInput {
    width: 250px;
    padding: 5px;
    margin-top: 15px;
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
  const [ischeck, setIscheck] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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

  // const checkHandler = () => {
  //   setIscheck(!ischeck);
  // };

  const SignupHandler = (e) => {
    e.preventDefault();
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
              <input
                className="SignupInput"
                id="user-id"
                name="nickName"
                type="text"
                onChange={onChangeHandler("nickName")}
              />
            </label>{" "}
          </div>
          <div className="UserinfoWrap">
            <label htmlFor="email">
              Email <br />
              <input
                className="SignupInput"
                id="email"
                name="email"
                type="email"
                onChange={onChangeHandler("email")}
              />
            </label>
          </div>
          <div className="UserinfoWrap">
            <label htmlFor="password">
              Password <br />
              <input
                className="SignupInput"
                id="password"
                name="password"
                type="password"
                onChange={onChangeHandler("password")}
              />
            </label>
          </div>

          {/* <span>
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </span> */}

          <div className="UserinfoWrap">
            <label htmlFor="confirm_password">
              Confirm Password <br />
              <input
                className="SignupInput"
                id="confirm_password"
                name="confirmPassword"
                type="password"
              />
            </label>
          </div>

          <br />
          <button className="SignUpbtn" type="submit">
            Sign Up
          </button>
        </Signform>
      </div>
    </Backgtoundsign>
  );
};

export default Signup;
