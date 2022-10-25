// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
import styled from "styled-components";

const StyledMarkdown = styled.div`
  * {
    :default {
    }
  }
`;

const Markdown = () => {
  const markdown = `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |
  `;
  return (
    <StyledMarkdown className="Markdown-article">
      {/* <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} /> */}
    </StyledMarkdown>
  );
};

export default Markdown;
