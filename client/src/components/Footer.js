import styled from "styled-components";

const Footerbox = styled.div`
  background-color: black;
  height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  grid-column: 1/4;

  .box-1 {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    width: 20%;
    font-weight: 100;
    font-size: 0, 5rem;
  }

  .footerTitle {
    font-weight: bold;
    font-size: 1rem;
  }
`;

const Footer = () => {
  return (
    <Footerbox>
      <div className="box-1">
        <span className="footerTitle">STACKOVERFLOW</span>
        <span>Question</span>
        <span>Help</span>
      </div>
      <div className="box-1">
        <span className="footerTitle">PRODUCTS</span>
        <span>Teams</span>
        <span>ADvertising</span>
        <span>Talent</span>
      </div>
      <div className="box-1">
        <span className="footerTitle">COMPANY</span>
        <span>About</span>
        <span>Press</span>
        <span>Work Here </span>
      </div>
      <div className="box-1">
        <span className="footerTitle">STACK EXCHANGE NETWORK</span>
        <span>Culture & recreation</span>
        <span>Life & arts</span>
        <span>Science</span>
      </div>
      <div className="box">Blog Facebook Twitter LinkedIn Instagram</div>
    </Footerbox>
  );
};

export default Footer;
