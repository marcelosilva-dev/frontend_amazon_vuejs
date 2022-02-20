import api from "@/services/api";

export const useAuth = {
  validateCredentialsAndGetToken: async (credentials) => {
    const response = await api
      .post("/login", credentials)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));

    return response;
  },
  validateCredentialsAndGetUserData: async (email, password) => {
    const response = await api
      .get(`/auth-test?login=${email}&password=${password}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));

    console.log("response");
    console.log(response);
    return response;
  },
};

export default useAuth;
