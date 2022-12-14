import styled from "styled-components";

const StyledUserCard = styled.div`
  box-sizing: border-box;
  width: fit-content;
  background-color: #dceaf6;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  .user-info {
    color: ${(props) => props.theme.blueFont};
    font-weight: 600;
    display: flex;
    align-items: center;
    font-size: 1rem;
    img {
      width: 32px;
      height: 32px;
      margin: 8px 8px 0 0;
    }
  }
`;

const UserCard = ({ answer, createdAt, photoURL, displayName }) => {
  return (
    <StyledUserCard className="UserCard">
      <div className="created-at">
        {answer ? "answered" : "asked"} {createdAt}
      </div>
      <div className="user-info">
        <img src={photoURL} alt="" />
        <div>{displayName}</div>
      </div>
    </StyledUserCard>
  );
};

export default UserCard;
