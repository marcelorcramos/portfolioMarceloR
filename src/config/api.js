export const getApiUrl = (endpoint) => {
  const baseUrl = "https://api.marceloramos.pt";
  return `${baseUrl}${endpoint}`;
};

export const API_URLS = {
  CONTACT: "https://api.marceloramos.pt/contact",
  HEALTH: "https://api.marceloramos.pt/health"
};