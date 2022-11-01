import Cookies from "universal-cookie";
const cookies = new Cookies();

export function setRefreshTokenToCookie(refresh_token) {
  cookies.set("refresh_token", refresh_token, { sameSite: "strict" });
}
export function logout() {
  console.log("localStorage set logout!");
  window.localStorage.setItem("logout", Date.now());
  cookies.remove("refresh_token");
}
