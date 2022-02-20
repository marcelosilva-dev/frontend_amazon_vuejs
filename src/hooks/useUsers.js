import api from "@/services/api";
import useLocalStorage from "./useLocalStorage";
// import axios from "axios";

const useUsers = {
  getUser: async (id) => {
    const { token } = await useLocalStorage.getItem("@AmazonVue:store");

    const response = await api
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));

    return response;
  },
  createUser: async (body) => {
    const response = await api
      .post("/users", body)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));

    return response;
  },
  deleteUser: async (id) => {
    const response = await api
      .delete(`/users/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));

    return response;
  },
  updateUser: async (body) => {
    const { id, token } = await useLocalStorage.getItem("@AmazonVue:store");

    const response = await api
      .put(`/users/${id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));

    return response;
  },
};

export default useUsers;
