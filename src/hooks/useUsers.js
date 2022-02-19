import api from "@/services/api";
// import axios from "axios";

const useUsers = {
  getUser: async (id) => {
    const response = await api
      .get(`/users/${id}`)
      .then((response) => (this.info = response.data))
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
      .then((response) => (this.info = response.data))
      .catch((error) => console.log(error));

    return response;
  },
  updateUser: async (body) => {
    const response = await api
      .put(`/users/${body.id}`, body)
      .then((response) => (this.info = response.data))
      .catch((error) => console.log(error));

    return response;
  },
};

export default useUsers;
