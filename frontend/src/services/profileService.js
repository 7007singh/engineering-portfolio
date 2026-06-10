import api from "../api/client";

export const getProfile = async () => {
  const response = await api.get("/profile");
  return response.data;
};