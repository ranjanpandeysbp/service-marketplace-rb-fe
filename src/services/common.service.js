import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/common/";

const onboardBusiness = (request, urlpath) => {
  return axios.post(API_URL + urlpath, request);
};

export default {
  onboardBusiness
};