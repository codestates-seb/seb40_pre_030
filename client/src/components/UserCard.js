import styled from "styled-components";

const StyledUserCard = styled.div`
  box-sizing: border-box;
  width: fit-content;
  background-color: lightblue;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  .user-info {
    display: flex;
    align-items: center;
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
