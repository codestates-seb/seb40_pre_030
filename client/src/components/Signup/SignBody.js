import styled from "styled-components";

const TextBody = styled.div`
  width: 440px;
`;

const SubTitle = styled.div`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const SubInfo = styled.div`
  font-size: 1rem;
  margin-bottom: 2rem;

  padding: 5px;
  > img {
    width: 30px;
    margin-right: 5px;
  }
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
        <img src="https://user-images.githubusercontent.com/107850055/198524110-ec09c42a-0e7c-4d45-9f46-4b006b80e663.png"></img>
        Get unstuck — ask a question
      </SubInfo>
      <SubInfo>
        <img src="https://user-images.githubusercontent.com/107850055/198523765-547e8efb-5103-44a8-9f12-c3ca68f928d1.png"></img>
        Unlock new privileges like voting and commenting
      </SubInfo>
      <SubInfo>
        <img src="https://user-images.githubusercontent.com/107850055/198524272-d72b2992-969b-405e-a0d7-711811608cfa.png"></img>
        Save your favorite tags, filters, and jobs
      </SubInfo>
      <SubInfo>
        <img src="https://user-images.githubusercontent.com/107850055/198524376-92e11b5b-ce4d-40e6-8d64-31be48f30189.png"></img>
        Earn reputation and badges
      </SubInfo>
      <SubInfo>
        <span className="Sublink">
          Collaborate and share knowledge with a private group for FREE.
          <br></br>
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
