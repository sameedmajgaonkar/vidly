import jwtDecode from "jwt-decode";
import http from "./httpService";
import config from "./config.json";

const apiEndpoint = config.apiUrl + "/auth";

const tokenKey = "token";

http.setJWT(getJWT());
export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJWT(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJWT() {
  return localStorage.getItem(tokenKey);
}
export default {
  login,
  loginWithJWT,
  logout,
  getCurrentUser,
  getJWT,
};
