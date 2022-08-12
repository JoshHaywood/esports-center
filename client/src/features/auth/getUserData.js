import axios from "axios";

export async function getUserData(config) {
  const response = await axios
    .get(`${config.serverUrl}/auth/getUser`, { withCredentials: true })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
  return response;
}
