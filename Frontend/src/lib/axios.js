import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.mode === "development" ? "http://localhost:3000/api" : "/api",
  withCredentials: true, // Send cookies to the server (if applicable)
});

export default axiosInstance;