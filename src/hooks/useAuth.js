import api from "@/services/api";

export const useAuth = {
  isAuthenticated: async (credentials) => {
    const response = await api
      .post("/auth", credentials)
      .then((response) => (this.info = response.data))
      .catch((error) => console.log(error));

    return response;
  },
};

export default useAuth;
