import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "https://localhost:3001/",
});

export default axiosApiIntances;
