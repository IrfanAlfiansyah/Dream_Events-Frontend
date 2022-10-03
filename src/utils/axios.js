import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "https://localhost:3000/",
});

export default axiosApiIntances;
