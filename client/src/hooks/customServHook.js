import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../util/api";

export const useSingup = () => {
  const [singup, setSignup] = useState(null);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios({
      method: "post",
      url: `${BASE_URL}users/signup`,
      data: {
        email: "mme5@gmail.com",
        nickName: "mme5",
        password: "mme5",
        photoURL:
          "https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg",
      },
      headers: {
        "ngrok-skip-browser-warning": "skip",
      },
    })
      .then((response) => {
        setSignup(response);
      })
      .catch((err) => console.log(err.response));
  }, []);
  return singup;
};

export const useLogin = () => {
  // const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios({
      method: "post",
      url: `${BASE_URL}users/login`,
      data: {
        email: "mme5@gmail.com",
        password: "mme5",
      },
      headers: {
        "ngrok-skip-browser-warning": "skip",
      },
    })
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.log(err.response));
  }, []);
  return data;
};
