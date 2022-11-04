import styled from "styled-components";
import Button from "../Button";

const StyledDiv = styled.div`
  border: 1px solid #e1e4e6;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  .SideBottomhead {
    padding: 12px;
    border-bottom: 1px solid #e1e4e6;

    background-color: ${(props) => props.theme.headerBg};
  }
  .SideBotWrap {
    border: 1px solid #e1e4e6;
    padding: 12px;
  }
  .service {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .service-company {
    display: flex;
    align-items: center;
  }
  .company-image {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
  .service-company-name {
    display: flex;
    align-items: center;
  }
  .SideBotCon {
    font-size: 13.5px;
  }
`;

const serviceCompanies = [
  {
    src: "https://cdn.sstatic.net/Sites/stackoverflow/Img/subcommunities/google-cloud.svg?v=5d10e4a96c5b",
    name: "Google Cloud",
    body: "Google Cloud provides organizations with leading infrastructure,platform capabilities...",
  },
  {
    src: "https://cdn.sstatic.net/Sites/stackoverflow/Img/subcommunities/twilio.svg?v=ab07490da974",
    name: "Twilio",
    body: "Twilio has democratized channels like voice, text, chat, video, and email by virtualizing the...",
  },
  {
    src: "https://user-images.githubusercontent.com/107850055/197701256-2fddfddc-78c7-4f22-9e02-ff245c822213.png",
    name: "WSO2",
    body: "WSO2 solutions give enterprises the flexibility to deploy applications and services on-...",
  },
];

const Service = ({ company }) => {
  return (
    <div className="SideBotWrap">
      <div className="service">
        <div className="service-company">
          <img className="company-image" src={company.src} alt="" />
          <div className="service-company-name">{company.name}</div>
        </div>
        <Button
          bgcolor="white"
          font={(props) => props.theme.blueFont}
          border={(props) => props.theme.blueFont + " solid 1px"}
        >
          Join
        </Button>
      </div>
      <span className="SideBotCon">{company.body}</span>
    </div>
  );
};

const Collectives = () => {
  return (
    <StyledDiv className="SideBottom">
      <div className="SideBottomhead">Collectives</div>
      {serviceCompanies.map((el, idx) => (
        <Service company={el} key={idx} />
      ))}
    </StyledDiv>
  );
};

export default Collectives;
