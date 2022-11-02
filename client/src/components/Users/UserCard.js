import styled from "styled-components";

const StyledUserCard = styled.div`
  background-color: gray;
  display: flex;
  .user-avatar {
    width: 48px;
    height: 48px;
  }
  .badge-counts {
    background-image: ${(props) => props.theme.sprites};
    width: 6px;
    height: 14px;
    margin-left: 2px;
    margin-right: 3px;
    display: inline-block;
    :nth-child(1) {
      background-position: -102px -398px;
    }
    :nth-child(2) {
      background-position: -82px -398px;
    }
    :nth-child(3) {
      background-position: -62px -398px;
    }
  }
`;

const obj = {
  badge_counts: {
    bronze: 9105,
    silver: 8997,
    gold: 839,
  },
  reputation: 1365387,
  user_id: 22656,
  location: "Reading, United Kingdom",
  website_url: "http://csharpindepth.com",
  profile_image:
    "https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=256&d=identicon&r=PG",
  display_name: "Jon Skeet",
};

function formatNumber(num) {
  let result = num;
  if (result >= 1e6) return `${Math.floor(result / 1e5) / 10}M`;
  else if (result >= 1e3) return `${Math.floor(result / 1e2) / 10}K`;
}

const UserCard = () => {
  return (
    <StyledUserCard>
      <img className="user-avatar" src={obj.profile_image} alt="" />
      <div className="user-Info">
        <div>{obj.display_name}</div>
        <div>{obj.location}</div>
        <div>
          {formatNumber(obj.reputation)}
          <span className="badge-counts"></span>
          {obj.badge_counts.gold}
          <span className="badge-counts"></span>
          {obj.badge_counts.silver}
          <span className="badge-counts"></span>
          {obj.badge_counts.bronze}
        </div>
      </div>
    </StyledUserCard>
  );
};

export default UserCard;
