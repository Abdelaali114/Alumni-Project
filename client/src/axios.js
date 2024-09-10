import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://16.170.205.207:3001/api/",
  withCredentials: true,
});



