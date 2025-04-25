import axios from 'axios'

const token = localStorage.getItem("Token");

const axiosBaseUrl = axios.create({
  baseURL: "http://35.180.33.185:8000/api/v1",
  // baseURL: "http://15.237.119.184:8000/api/v1",
  // baseURL: "http://15.237.215.230:8000/api/v1",
  // baseURL: "http://localhost:8000/api/v1",

  headers: {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  },
});

export default axiosBaseUrl;