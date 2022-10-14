import axios from "../../utils/axios";

export const getDataEvent = () => {
  return {
    type: "GET_DATA_EVENT",
    payload: axios.get(`event?name=&sort=&limit=5&page=1&searchDate=`),
  };
};

export const createDataEvent = (data) => {
  return {
    type: "CREATE_DATA_EVENT",
    payload: axios.post("event", data),
  };
};
