import axios from "axios";

const token = "REACT_APP_API_TOKEN";

export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer  + ${token}`,
  },
});
