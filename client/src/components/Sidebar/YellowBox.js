import styled from "styled-components";
import { ReactComponent as Pencil } from "../../assets/pencil.svg";

export const StyledYellowBox = styled.div`
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
    margin: 0 0.4rem;
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

const listContents = {
  faPen: [
    {
      icon: "faPen",
      href: "https://stackoverflow.blog/2022/10/24/how-hardware-and-software-can-maximize-your-flow-states/?cb=1&_ga=2.206072915.1741655448.1666525029-1930885377.1656908536",
      content:
        "He helped build .NET and VS Code — Now’s he working on Web3 (Ep. 499)",
    },
    {
      icon: "faPen",
      href: "https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.234070366.1741655448.1666525029-1930885377.1656908536",
      content: "How hardware and software can maximize your flow states",
    },
  ],
  faCommentAlt: [
    {
      icon: "faCommentAlt",
      href: "https://meta.stackexchange.com/questions/383022/the-2022-community-a-thon-has-begun?cb=1",
      content: "The 2022 Community-a-thon has begun!",
    },
    {
      icon: "faCommentAlt",
      href: "https://meta.stackexchange.com/questions/383026/mobile-app-infrastructure-being-decommissioned?cb=1",
      content: "Staging Ground Workflow: Canned Comments",
    },
    {
      icon: "stack",
      href: "https://meta.stackoverflow.com/questions/420897/staging-ground-workflow-canned-comments?cb=1",
      content: "The [script] tag is being burninated",
    },
    {
      icon: "stack",
      href: "https://meta.stackoverflow.com/questions/406928/the-script-tag-is-being-burninated?cb=1",
      content: "Ask Wizard Test Graduation",
    },
  ],
};

const Icon = styled.div`
  height: 14px;
  width: 14px;
  background-image: ${(props) => props.theme.iconSprites};
  background-position: ${(props) =>
    props.icon === "comment" ? "0 -6120px" : "0 -6156px"};
  background-size: 16px 7038px;
`;

export const ListContent = ({ listContent, id }) => {
  return (
    <li className="Sidecontent" key={id}>
      <div className="list-item">
        <span className="icon-wrapper">
          {listContent.icon === "faPen" && <Pencil width="14" height="14" />}
          {listContent.icon === "faCommentAlt" && <Icon icon="comment" />}
          {listContent.icon === "stack" && <Icon icon="stack" />}
        </span>
        <a href={listContent.href}>{listContent.content}</a>
      </div>
    </li>
  );
};

const YellowBox = () => {
  return (
    <StyledYellowBox className="SideTop">
      <ul className="Sideul">
        <li className="Sideheader">The Overflow Blog</li>
        {listContents.faPen.map((el, idx) => (
          <ListContent listContent={el} key={idx} />
        ))}
        <li className="Sideheader">Featured on Meta</li>
        {listContents.faCommentAlt.map((el, idx) => (
          <ListContent listContent={el} key={idx + 2} />
        ))}
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
    </StyledYellowBox>
  );
};

export default YellowBox;
