import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com",
  // No default headers here means you'll provide them per request
});

export default api;
