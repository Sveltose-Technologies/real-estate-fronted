// src/services/userService.js

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';
import api from "../services/axios";

// Example A: A simple GET request with standard headers
export async function fetchBanners() {
  const response = await api.get("/homebanner/get-all", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
}

// Example B: A request that needs an Auth Token and a Custom ID
export async function fetchPrivateData() {
  const response = await api.get("/user/private", {
    headers: {
      Authorization: `Bearer `,
      "X-Project-ID": "my-cool-app",
    },
  });
  return response.data;
}

// Example C: A POST request (headers go in the 3rd argument)
export async function uploadForm(payload) {
  const response = await api.post("/form/create", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
}
export async function uploadData(payload) {
  const response = await api.post("/form/create", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}
