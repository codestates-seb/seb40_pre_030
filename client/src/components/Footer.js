import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";

const SprintItme = styled.div`
  font-size: 3rem;
  margin-left: 20px;
  padding-left: 30px;
  margin-top: 20px;
`;

const Footerbox = styled.div`
  background-color: black;
  /* height: 20vh; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #b5b5b5;

  grid-column: 1/3;

  .box-1 {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    width: 20%;
    font-weight: 100;
    font-size: 0, 5rem;
  }

  .footerTitle {
    font-weight: bold;
    font-size: 1rem;
    margin: 5px;
  }

  .footersub {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
        <span>Question</span>
        <span>Help</span>
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
        <span>Technology</span>
        <span>Culture & recreation</span>
        <span>Life & arts</span>
        <span>Science</span>
        <span>Professional</span>
        <span>Business</span>
        <span></span>
        <span>API</span>
        <span>Data</span>
      </div>
      <div className="box">Blog Facebook Twitter LinkedIn Instagram</div>
    </Footerbox>
  );
};

export default Footer;
