import { useState } from "react";
import Card from "./card";
import { UserIconBox, UserIconButton, UserProfileBox } from "./style";

const PopUserCard = () => {
  const [openCard, setOpencard] = useState(false);
  const img =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Hawaiian_monk_seal_at_French_Frigate_Shoals_07.jpg/1280px-Hawaiian_monk_seal_at_French_Frigate_Shoals_07.jpg";
  return (
    <UserProfileBox>
      <UserIconBox>
        <UserIconButton
          userImg={img}
          className="user-button"
          onClick={() => setOpencard((prev) => !prev)}
        />
      </UserIconBox>
      {openCard && <Card />}
    </UserProfileBox>
  );
};

export default PopUserCard;
