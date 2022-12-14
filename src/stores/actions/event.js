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

export const updateDataEvent = (data, eventId) => {
  return {
    type: "UPDATE_DATA_EVENT",
    payload: axios.patch(`event/${eventId}`, data),
  };
};

export const deleteDataEvent = (eventId) => {
  return {
    type: "DELETE_DATA_EVENT",
    payload: axios.delete(`event/${eventId}`),
  };
};
