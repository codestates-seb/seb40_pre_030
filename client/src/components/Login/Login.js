import { useState } from "react";
import styled from "styled-components";
import Thirdparty from "./Thirdparty";
import Stackoverflowimg from "./StackoverflowImg";

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

  input {
    width: 100%;
    height: 2rem;
    border: 1px solid rgba(198, 199, 199, 1);

    &:focus {
      box-shadow: 0px 0px 3px 6px rgba(127, 193, 240, 0.32);
      background-color: #e4f7fc;
      border: none;
    }
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
  // const [errorMessage,setErrorMessage]= useState(false)

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(login);

  return (
    <BackgroundLogin>
      <div className="Logincontent">
        <Stackoverflowimg />
        <Thirdparty />
        <LoginForm
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={onChangeHandler}
        >
          <div className="inputform">
            <span className="label">Email</span>
            <input
              value={login.email || ""}
              //  onChange={onChangeHandler('userId')}
              type="text"
              name="email"
              onChange={onChangeHandler}
            ></input>

            <div className="label">
              Password
              <Labellink href="https://stackoverflow.com/users/account-recovery">
                Forgot password?
              </Labellink>
            </div>

            <input
              value={login.password || ""}
              //  onChange={onChangeHandler('password')}
              type="text"
              name="password"
              onChange={onChangeHandler}
            ></input>
          </div>
          <Submitbtn type="submit" onChange={onChangeHandler}>
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
            {/* {errorMessage} */}
          </div>
        </div>
      </div>
    </BackgroundLogin>
  );
};

export default Login;
