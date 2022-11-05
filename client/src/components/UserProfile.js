export const UserProfile = (el) => {
  return (
    <>
      <div>{el.photoURL}</div>
      <div>{el.nickName}</div>
      <div>{el.postCount}</div>
      <div>{el.userTag}</div>
    </>
  );
};
