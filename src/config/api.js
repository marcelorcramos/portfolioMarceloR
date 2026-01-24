const API_CONFIG = {
  // URL ABSOLUTA - NUNCA RELATIVA
  BASE_URL: "https://api.marceloramos.pt",
  ENDPOINTS: {
    CONTACT: "/contact"
  }
};

// Função para obter URL completa
export const getApiUrl = (endpoint) => {
  if (!API_CONFIG.BASE_URL) {
    throw new Error("API base URL não configurada");
  }
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

export default API_CONFIG;