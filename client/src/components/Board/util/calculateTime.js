export const calculateTime = (date) => {
  const start = new Date(date);
  const end = new Date(); // 현재 날짜

  const diff = end - start; // 경과 시간

  const times = [
    { time: "mins", milliSeconds: 1000 * 60 },
    { time: "hours", milliSeconds: 1000 * 60 * 60 },
    { time: "days", milliSeconds: 1000 * 60 * 60 * 24 },
    { time: "months", milliSeconds: 1000 * 60 * 60 * 24 * 30 },
    { time: "years", milliSeconds: 1000 * 60 * 60 * 24 * 365 },
  ].reverse();

  // 년 단위부터 알맞는 단위 찾기
  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    // 큰 단위는 0보다 작은 소수 단위 나옴
    if (betweenTime > 0) {
      return `${betweenTime}${value.time} ago`;
    }
  }

  // 모든 단위가 맞지 않을 시
  return "just now";
};
