import { faCommentAlt, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #fef6df;
  border: 1px solid #f1e1b6;
  margin-bottom: 20px;

  a {
    color: black;
    text-decoration: none;
  }

  .list-item {
    display: flex;
    margin-bottom: 8px;
  }

  .icon-wrapper {
    height: 100%;
  }

  .icon {
    margin: 0 15px;
  }

  .Sideheader {
    border-top: 1px solid hsl(47, 65%, 84%);
    border-bottom: 1px solid hsl(47, 65%, 84%);
    background-color: #fcf1d1;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
    padding: 15px 18px;
    :first-child {
      border-top: none;
    }
  }
  .Sidecontent {
    padding: 8px;
    font-size: 14px;
  }
`;

const YellowBox = () => {
  return (
    <StyledDiv className="SideTop">
      <ul className="Sideul">
        <li className="Sideheader">The Overflow Blog</li>
        <li className="Sidecontent">
          <div className="list-item">
            <span className="icon-wrapper">
              <FontAwesomeIcon className="icon" icon={faPen} />
            </span>
            <a href="https://stackoverflow.blog/2022/10/24/how-hardware-and-software-can-maximize-your-flow-states/?cb=1&_ga=2.206072915.1741655448.1666525029-1930885377.1656908536">
              He helped build .NET and VS Code — Now’s he working on Web3 (Ep.
              499)
            </a>
          </div>
        </li>
        <li className="Sidecontent">
          <div className="list-item">
            <span className="icon-wrapper">
              <FontAwesomeIcon className="icon" icon={faPen} />
            </span>
            <a href="https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.234070366.1741655448.1666525029-1930885377.1656908536">
              How hardware and software can maximize your flow states
            </a>
          </div>
        </li>
        <li className="Sideheader">Featured on Meta</li>
        <li className="Sidecontent">
          <div className="list-item">
            <span className="icon-wrapper">
              <FontAwesomeIcon className="icon" icon={faCommentAlt} />
            </span>
            <a href="https://meta.stackexchange.com/questions/383022/the-2022-community-a-thon-has-begun?cb=1">
              The 2022 Community-a-thon has begun!
            </a>
          </div>
        </li>
        <li className="Sidecontent">
          <div className="list-item">
            <span className="icon-wrapper">
              <FontAwesomeIcon className="icon" icon={faCommentAlt} />
            </span>
            <a href="https://meta.stackexchange.com/questions/383026/mobile-app-infrastructure-being-decommissioned?cb=1">
              Staging Ground Workflow: Canned Comments
            </a>
          </div>
        </li>
        <li className="Sidecontent">
          <div className="list-item">
            <span className="icon-wrapper">
              <FontAwesomeIcon className="icon" icon={faCommentAlt} />
            </span>
            <a href="https://meta.stackoverflow.com/questions/420897/staging-ground-workflow-canned-comments?cb=1">
              The [script] tag is being burninated
            </a>
          </div>
        </li>
        <li className="Sidecontent">
          <div className="list-item">
            <span className="icon-wrapper">
              <FontAwesomeIcon className="icon" icon={faCommentAlt} />
            </span>
            <a href="https://meta.stackoverflow.com/questions/406928/the-script-tag-is-being-burninated?cb=1">
              Ask Wizard Test Graduation
            </a>
          </div>
        </li>
        <li className="Sideheader">Hot Meta Posts</li>
        <li className="Sidecontent">
          <div>
            <span className="icon">9 </span>
            <a href="https://meta.stackoverflow.com/questions/421007/should-i-edit-questions-to-tidy-code-snippets?cb=1">
              25 Burninate [self-hosting]
            </a>
          </div>
        </li>
      </ul>
    </StyledDiv>
  );
};

export default YellowBox;
