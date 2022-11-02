import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  top: 32px;
  width: 340px;
  padding: 12px;
  background: rgb(255, 255, 255);
  border-radius: 7px;
  border: #d6d9dc solid 2px;
  z-index: 100;
  box-shadow: rgb(0 0 0 / 6%) 0px 1px 3px, rgb(0 0 0 / 6%) 0px 2px 6px,
    rgb(0 0 0 / 9%) 0px 3px 8px;
  :before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0px 10px 12px;
    border-color: #d6d9dc transparent;
    display: block;
    width: 0px;
    top: -12px;
    left: 9px;
  }
  :after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0px 9px 11px;
    border-color: rgb(255, 255, 255) transparent;
    display: block;
    width: 0px;
    top: -9px;
    left: 10px;
  }
  .bubble-text {
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0.3rem 0;
  }
  input {
    border: ${(props) => props.theme.searchBarBorder + " solid 1px"};
    border-radius: 3px;
    padding: 0.4rem 0.5rem;
    border-color: #6bbbf7;
    outline: #cde9fe solid 4px;
  }
  .bubble-interaction {
    display: flex;
    justify-content: space-between;
  }
  #copy-button {
    padding: 0;
    color: ${(props) => props.theme.blueFont};
    cursor: pointer;
  }
  img {
    width: 16px;
    height: 16px;
    cursor: pointer;
    :hover {
      background-color: lightblue;
      outline: lightblue 3px solid;
    }
  }
`;

const Bubble = ({ link }) => {
  const onCopy = async () => {
    await navigator.clipboard.writeText(link);
    alert("Copy complete!");
  };
  return (
    <Div className="Bubble">
      <div className="bubble-text">Share a link to this question</div>
      <input value={link} disabled />
      <div className="bubble-interaction">
        <button id="copy-button" onClick={onCopy}>
          Copy link
        </button>
        <div>
          <img
            src="https://velog.velcdn.com/images/2pandi/post/2e185b3a-6a6a-4f31-812e-b0f7fecee82d/image.svg"
            alt=""
          />
          <img
            src="https://velog.velcdn.com/images/2pandi/post/806ae1d6-b9f3-4637-be94-8d35294ae09e/image.svg"
            alt=""
          />
          <img
            src="https://velog.velcdn.com/images/2pandi/post/142b23be-a06a-4275-8b80-6c2d7312051d/image.svg"
            alt=""
          />
        </div>
      </div>
    </Div>
  );
};

export default Bubble;
