// src/services/userService.js
import api from "../services/api";

// --- EXISTING METHODS ---
export async function fetchBanners() {
  const response = await api.get("/homebanner/get-all", {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export async function uploadForm(payload) {
  const response = await api.post("/form/create", payload, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

// --- CONTACT METHODS ---
export const getAllContactApi = async () => {
  console.log("API CALL: GET all contacts");
  const res = await api.get("/contact/get-all");
  console.log("API RESPONSE: GET all contacts", res.data);
  return res.data;
};

// --- INQUIRY METHODS (All Dynamic with Console Logs) ---

// Send Inquiry (POST)
export const sendInquiryApi = async (payload) => {
  console.log("API CALL: Sending Inquiry...", payload);
  const response = await api.post("/inquiry/send", payload, {
    headers: { "Content-Type": "application/json" },
  });
  console.log("API RESPONSE: Send Inquiry", response.data);
  return response.data;
};

// Get All Inquiries (GET)
export const getAllInquiryApi = async () => {
  console.log("API CALL: Get all inquiries");
  const response = await api.get("/inquiry/get-all");
  console.log("API RESPONSE: Get all inquiries", response.data);
  return response.data;
};

// Get Inquiry By ID (GET)
export const getInquiryByIdApi = async (id) => {
  console.log("API CALL: Get inquiry by ID:", id);
  const response = await api.get(`/inquiry/get-by-id/${id}`);
  console.log("API RESPONSE: Get by ID", response.data);
  return response.data;
};

// Update Inquiry (PUT)
export const updateInquiryApi = async (id, payload) => {
  console.log(`API CALL: Updating inquiry ${id}`, payload);
  const response = await api.put(`/inquiry/update/${id}`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  console.log("API RESPONSE: Update success", response.data);
  return response.data;
};

// Delete Inquiry (DELETE)
export const deleteInquiryApi = async (id) => {
  console.log("API CALL: Deleting inquiry ID:", id);
  const response = await api.delete(`/inquiry/delete/${id}`);
  console.log("API RESPONSE: Delete success", response.data);
  return response.data;
};
