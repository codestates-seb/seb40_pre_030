import Cookies from "universal-cookie";
const cookies = new Cookies();

export function setRefreshTokenToCookie(refresh_token) {
  cookies.set("refresh_token", refresh_token, { sameSite: "strict" });
}

export function setAcceddTokenCookie(accesstoken) {
  cookies.set("accesstoken", accesstoken, { sameSite: "strict" });
}
export function logout() {
  window.localStorage.setItem("logout", Date.now());
  cookies.remove("refresh_token");
  cookies.remove("accesstoken");
}
