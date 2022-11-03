import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const Buttoncontent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 19rem;
  margin-bottom: 1.3rem;
  font-size: 0.8rem;
  .googleBtn:hover {
    background-color: #d3d3d4;
  }
  .githubBtn:hover {
    background-color: black;
  }
  .FacebookBtn:hover {
    background-color: #232c61;
  }
`;

const ThridButton = styled.button`
  display: flex;
  margin: 0.3rem;
  padding: 0.6rem;
  justify-content: center;
  border-radius: 5px;
  border: none;

  color: ${(props) => props.color || "black"};
  background: ${(props) => props.background || "white"};
  span {
    padding-left: 0.5rem;
  }
`;

const Thirdparty = () => {
  return (
    <Buttoncontent>
      <ThridButton className="googleBtn">
        <FontAwesomeIcon icon={faGoogle} />
        <span>Log in with Goolge</span>
      </ThridButton>
      <ThridButton
        className="githubBtn"
        background="rgba(15, 26, 57, 0.99)"
        color="white"
        hover="green"
      >
        <FontAwesomeIcon icon={faGithub} />
        <span>Log in with Github</span>
      </ThridButton>
      <ThridButton
        type="submit"
        className="FacebookBtn"
        background="rgba(52, 76, 141, 0.99)"
        color="white"
      >
        <FontAwesomeIcon icon={faSquareFacebook} />
        <span>Log in with Facebook</span>
      </ThridButton>
    </Buttoncontent>
  );
};

export default Thirdparty;
