import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";

const SprintItme = styled.div`
  font-size: 3rem;
  margin-left: 15px;
  margin-right: 15px;
  padding-left: 20px;
  margin-top: 20px;
  color: orange;
`;

const Footerbox = styled.div`
  background-color: #333333;
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

const Footer = () => {
  return (
    <Footerbox>
      <SprintItme>
        <FontAwesomeIcon icon={faStackOverflow} />
      </SprintItme>
      <div className="box-1">
        <span className="footerTitle">STACKOVERFLOW</span>
        <span className="subname">Question</span>
        <span className="subname">Help</span>
      </div>
      <div className="box-1">
        <span className="footerTitle">PRODUCTS</span>
        <div className="footersub">
          <span className="subname">Teams</span>
          <span className="subname">Advertising</span>
          <span className="subname">Collectives</span>
          <span className="subname">Talent</span>
        </div>
      </div>
      <div className="box-1">
        <span className="footerTitle">COMPANY</span>
        <div className="footersub">
          <span className="subname">About</span>
          <span className="subname">Press</span>
          <span className="subname">Work Here </span>
          <span className="subname">Legal</span>
          <span className="subname">Privacy Policy</span>
          <span className="subname">Terms of Service</span>
          <span className="subname">Contact Us</span>
          <span className="subname">Cookie Settings</span>
          <span className="subname">Cookie Policy</span>
        </div>
      </div>
      <div className="box-1">
        <span className="footerTitle">STACK EXCHANGE NETWORK</span>
        <span className="subname">Technology</span>
        <span className="subname">Culture & recreation</span>
        <span className="subname">Life & arts</span>
        <span className="subname">Science</span>
        <span className="subname">Professional</span>
        <span className="subname">Business</span>
        <span className="subname"></span>
        <span className="subname">API</span>
        <span className="subname">Data</span>
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
