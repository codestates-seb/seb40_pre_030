import styled from "styled-components";

const StyledUserCard = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  font-weight: 500;
  padding: 0.5rem 0.8rem;

  .user-avatar {
    width: 48px;
    height: 48px;
    margin-right: 0.8rem;
  }
  .user-info {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .user-name {
    color: ${(props) => props.theme.blueFont};
  }
  .user-location {
    color: ${(props) => props.theme.grayFont};
    font-size: 0.8rem;
  }
  .user-score {
    color: ${(props) => props.theme.grayFont};
    font-size: 0.8rem;
  }
  .user-reputation {
    color: gray;
    font-weight: 700;
  }
  .badge-counts {
    background-image: ${(props) => props.theme.sprites};
    width: 6px;
    height: 14px;
    margin-left: 2px;
    margin-right: 3px;
    display: inline-block;
    :nth-child(2) {
      background-position: -102px -398px;
    }
    :nth-child(3) {
      background-position: -82px -398px;
    }
    :nth-child(4) {
      background-position: -62px -398px;
    }
  }
`;

function formatNumber(num) {
  let result = num;
  if (result >= 1e6) return `${Math.floor(result / 1e5) / 10}m`;
  else if (result >= 1e3) return `${Math.floor(result / 1e2) / 10}k`;
}

const UserCard = ({ user }) => {
  return (
    <StyledUserCard>
      <img className="user-avatar" src={user.profile_image} alt="" />
      <div className="user-info">
        <div className="user-name">
          {user.display_name && user.display_name.length > 15
            ? user.display_name.substring(0, 15) + "..."
            : user.display_name}
        </div>
        <div className="user-location">
          {user.location && user.location.length > 20
            ? user.location.substring(0, 20) + "..."
            : user.location}
        </div>
        <div className="user-score">
          <span className="user-reputation">
            {formatNumber(user.reputation)}
          </span>
          <span className="badge-counts"></span>
          {user.badge_counts.gold}
          <span className="badge-counts"></span>
          {user.badge_counts.silver}
          <span className="badge-counts"></span>
          {user.badge_counts.bronze}
        </div>
      </div>
    </StyledUserCard>
  );
};

export default UserCard;
