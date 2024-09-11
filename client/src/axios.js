import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://16.171.78.95:3001/api/",
  withCredentials: true,
});



