import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1/";

const getAll = (urlpath) => {
  return axios.get(API_URL + urlpath, { headers: authHeader() });
};

const getOne = (urlpath) => {
  return axios.get(API_URL + urlpath, { headers: authHeader() });
};

const create = (request, urlpath) => {
  return axios.post(API_URL + urlpath, request, { headers: authHeader() });
};

const update = (request, urlpath) => {
  return axios.put(API_URL + urlpath, request, { headers: authHeader() });
};

export default {
  getAll,
  getOne,
  create,
  update
};