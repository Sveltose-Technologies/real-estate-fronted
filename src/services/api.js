import axios from "axios";

const api = axios.create({
  baseURL: "https://backend.realestateshop.co.nz/",
  // No default headers here means you'll provide them per request
});

export default api;
