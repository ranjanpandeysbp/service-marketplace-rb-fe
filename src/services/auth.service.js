import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/noauth";

const register = (request) => {
  return axios.post(API_URL + "/signup", request);
};

const login = (request) => {
  return axios
    .post(API_URL + "/signin", request)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response;
    }).catch((error)=>{
      throw error;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};