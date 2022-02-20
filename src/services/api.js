import axios from "axios";

const api = axios.create({
  baseURL: "https://api-spring-boot-jpa.herokuapp.com/",
});

export default api;
