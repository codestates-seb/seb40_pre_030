import { useState } from "react";
import styled from "styled-components";
import Thirdparty from "./Thirdparty";
import Stackoverflowimg from "./StackoverflowImg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { BASE_URL } from "../../util/api";
import { loginStatus, loginInfo } from "../../atoms/atoms";
import {
  setRefreshTokenToCookie,
  setAcceddTokenCookie,
} from "../../util/Cookies";

//outline->으로 주기

const LoginInputline = styled.input`
  width: 100%;
  height: 2rem;

  border: ${(props) =>
      props.active !== "" ? "rgba(252, 136, 136, 0.6)" : "lightgray"}
    solid 1px;
  &:focus {
    outline: ${(props) =>
        props.active !== "" ? "rgba(252, 136, 136, 0.6)" : "#cde9fe"}
      solid 4px;
  }
`;

const LoginForm = styled.form`
  border-radius: 10px;
  width: 19rem;
  height: 15rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .errmassage {
    color: red;
    font-size: 12px;
  }

  .label {
    display: flex;
    width: 100%;
    margin: 0px;
    font-weight: bold;
    font-size: 1rem;
  }
  .inputform {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 80%;
    height: 70%;
  }
`;

const Labellink = styled.a`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 70%;
  font-size: 0.5rem;
  float: right;
  color: rgba(51, 160, 255, 1);
`;

const Submitbtn = styled.button`
  width: 80%;
  height: 2.5rem;
  background-color: rgba(51, 160, 255, 1);
  border: 1px solid rgba(51, 160, 255, 1);
  border-radius: 5px;
  margin: 0.7rem 0px 1rem 0px;
  color: white;

  &:hover {
    background-color: rgba(0, 122, 230, 1);
  }
`;
const BackgroundLogin = styled.div`
  height: 100vh;
  background-color: rgba(232, 232, 232, 1);
  display: flex;
  justify-content: center;
  align-items: center;

  .Logincontent {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .sublink {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      margin-top: 2rem;
      font-size: 0.9rem;
    }
    .Employer-link {
      margin-top: 1rem;
    }
  }
`;

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [loginState, setLoginState] = useRecoilState(loginStatus);
  const [logininfo, setLoginInfo] = useRecoilState(loginInfo);
  const [emailerrorMessage, setEmailErrorMessage] = useState("");
  const [passworderrorMessage, setPasswordErrorMessage] = useState("");

  const navigate = useNavigate();

  const onChangeHandler = (key) => (e) => {
    // const { name, value } = e.target;
    // setLogin((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
    setLogin({ ...login, [key]: e.target.value });
  };

  const StateChange = () => {
    setLoginState(!loginInfo);
  };

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login.email.length === 0 && !login.password) {
      setEmailErrorMessage("Email cannot be empty.");
      setPasswordErrorMessage("Password cannot be empty.");
      return;
    } else if (!emailRegEx.test(login.email)) {
      setEmailErrorMessage("The email is not a valid email address.");
      return;
    } else if (!login.password) {
      setPasswordErrorMessage("Password cannot be empty.");
      return;
    }

    axios.defaults.withCredentials = true;
    axios({
      method: "post",
      url: `${BASE_URL}users/login`,
      data: {
        email: login.email,
        password: login.password,
      },
      headers: {
        "ngrok-skip-browser-warning": "skip",
      },
    })
      .then((response) => {
        const accessToken = response.headers.authorization;
        const refreshToken = response.headers.refresh;
        localStorage.setItem("accessToken", accessToken);
        // localStorage.setItem("refreshToken", refreshToken);
        // if (response.data.refreshToken) {
        //   localStorage.setItem("REFRESH_TOKEN", response.data.refreshToken);
        // }
        // setLoginState(true);
        setLoginInfo(response.data);
        setLoginState(true);
        // const loginStatus = true;
        console.log(response.data);
        // localStorage.setItem("loginState", loginState);
        // localStorage.setItem("loginStatus", loginStatus);
        axios.defaults.headers.common["Authorization"] = `${accessToken}`;
        setRefreshTokenToCookie(refreshToken);
        setAcceddTokenCookie(accessToken);
        navigate("/");
      })
      .catch((err) => console.log(err.response));
  };
  return (
    <BackgroundLogin>
      <div className="Logincontent">
        <Stackoverflowimg />
        <Thirdparty />
        <LoginForm
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <div className="inputform">
            <span className="label">Email</span>
            <LoginInputline
              active={emailerrorMessage}
              value={login.email}
              //  onChange={onChangeHandler('userId')}
              type="text"
              name="email"
              onChange={onChangeHandler("email")}
            ></LoginInputline>
            {emailerrorMessage === "" ? null : (
              <div className="errmassage">{emailerrorMessage}</div>
            )}

            <div className="label">
              Password
              <Labellink href="https://stackoverflow.com/users/account-recovery">
                Forgot password?
              </Labellink>
            </div>

            <LoginInputline
              active={passworderrorMessage}
              value={login.password || ""}
              //  onChange={onChangeHandler('password')}
              type="password"
              name="password"
              onChange={onChangeHandler("password")}
            ></LoginInputline>

            {passworderrorMessage === "" ? null : (
              <div className="errmassage" color={"red"}>
                {passworderrorMessage}
              </div>
            )}
          </div>
          <Submitbtn
            type="submit"
            onChange={handleSubmit}
            onClick={StateChange}
          >
            Log in
          </Submitbtn>
        </LoginForm>
        <div className="sublink">
          <div>
            Dont't have an account?
            <a href="https://stackoverflow.com/users/signup?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2f">
              Sign up
            </a>
          </div>

          <div className="Employer-link">
            Are you an employer?
            <a href="https://stackoverflow.com/users/signup?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2f">
              Sign up on Talent
            </a>
          </div>
        </div>
      </div>
    </BackgroundLogin>
  );
};

export default Login;
