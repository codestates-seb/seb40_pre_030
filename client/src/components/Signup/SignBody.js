import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const TextBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 17rem;
`;

const SubTitle = styled.div`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const SubInfo = styled.div`
  font-size: 1rem;
  margin-bottom: 2rem;

  .Sublink {
    color: gray;
  }
  .Subalink {
    color: rgba(51, 160, 255, 1);
  }
`;

const SignBody = () => {
  return (
    <TextBody>
      <SubTitle className="Info1">Join the Stack Overflow community</SubTitle>
      <SubInfo>
        <FontAwesomeIcon icon={faMessage} />
        Get unstuck — ask a question
      </SubInfo>
      <SubInfo>Unlock new privileges like voting and commenting</SubInfo>
      <SubInfo>Save your favorite tags, filters, and jobs</SubInfo>
      <SubInfo>Earn reputation and badges</SubInfo>
      <SubInfo>
        <span className="Sublink">
          Collaborate and share knowledge with a private group for FREE.
        </span>
        <a
          href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up"
          className="Subalink"
        >
          Get Stack Overflow for Teams free for up to 50 users.
        </a>
      </SubInfo>
    </TextBody>
  );
};

export default SignBody;
