import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/stackLogo.svg";

const SprintItme = styled.div`
  font-size: 3rem;
  margin-left: 15px;
  margin-right: 15px;
  padding-left: 20px;
  margin-top: 20px;
  color: orange;
`;

const Footerbox = styled.div`
  z-index: 1;
  background-color: #232629;
  /* height: 20vh; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #b5b5b5;

  grid-column: 1/3;

  .box-1 {
    /* margin: 2rem; */
    margin: 2rem;
    display: flex;
    flex-direction: column;
    /* width: 12%; */
    font-weight: 100;

    font-size: 0, 5rem;
  }

  .footerTitle {
    font-weight: bold;
    font-size: 0.9rem;
    margin: 5px;
  }

  .footersub {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .subname {
    margin: 0.3rem;
    font-size: 0.9rem;
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 0.7rem;
    width: 20%;
    margin: 2rem;
  }
`;
const stack = ["Question", "Help"];
const product = ["Teams", "Advertising", "Collectives", "Talent"];
const company = [
  "About",
  "Press",
  "Work Here",
  "Legal",
  "Privacy Policy",
  "Terms of Service",
  "Contact Us",
  "Cookie Settings",
  "Cookie Policy",
];
const network = [
  "Technology",
  "Culture & recreation",
  "Life & arts",
  "Science",
  "Professional",
  "Business",
  "",
  "API",
  "Data",
];
const Footer = () => {
  return (
    <Footerbox>
      <SprintItme>
        <Logo width="32" height="37" />
      </SprintItme>
      <div className="box-1">
        <span className="footerTitle">STACKOVERFLOW</span>
        {stack.map((el) => (
          <span className="subname">{el}</span>
        ))}
      </div>
      <div className="box-1">
        <span className="footerTitle">PRODUCTS</span>
        <div className="footersub">
          {product.map((el) => (
            <span className="subname">{el}</span>
          ))}
        </div>
      </div>
      <div className="box-1">
        <span className="footerTitle">COMPANY</span>
        <div className="footersub">
          {company.map((el) => (
            <span className="subname">{el}</span>
          ))}
        </div>
      </div>
      <div className="box-1">
        <span className="footerTitle">STACK EXCHANGE NETWORK</span>
        {network.map((el) => (
          <span className="subname">{el}</span>
        ))}
      </div>
      <div className="box">
        <div>Blog Facebook Twitter LinkedIn Instagram</div>
        <div>
          Site design / logo © 2022 Stack Exchange Inc; user contributions
          licensed under CC BY-SA. rev 2022.11.2.43002
        </div>
      </div>
    </Footerbox>
  );
};

export default Footer;
