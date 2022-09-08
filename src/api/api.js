import axios from "axios";

const api = axios.create({
  baseURL: "https://project-m3-kenzie.herokuapp.com",
});


export default api;
