import { useRecoilState } from "recoil";
import { loginInfo } from "../../atoms/atoms";
import { SImg, SProfileBox, SUserNameH3 } from "./style";

const PopUserCard = ({ userOnClick }) => {
  const [userInfo, setUserInfo] = useRecoilState(loginInfo);
  return (
    <SProfileBox>
      <SImg src={userInfo.photoURL} />
      <SUserNameH3>{userInfo.nickName}</SUserNameH3>
      <p>{userInfo.email}</p>
    </SProfileBox>
  );
};

export default PopUserCard;
