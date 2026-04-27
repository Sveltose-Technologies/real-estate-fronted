import axios from "axios";

const api = axios.create({
  baseURL: "https://backend.realestateshop.co.nz/",
});

export default api;
