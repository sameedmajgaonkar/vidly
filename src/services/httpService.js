import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    logger.log("Logging the error", error);
    toast.error("An unexpected error ocurred");
  }
  return Promise.reject(error);
});
function setJWT(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJWT,
};
// Expected - (404: not found, 400: bad request) - ClIENT ERRORS  400>= Expected errors <500
// - Display a specific error message
// Unexpected (network down, server down, db down, bug)
// - Log them
// -Display a generic and friendly error message
