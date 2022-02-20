import axios from "axios";

const api = axios.create({
  baseURL: "https://api-amazon-clone-marcelosilva.herokuapp.com/",
});

export default api;
