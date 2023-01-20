import axios from "../../utils/axios";

export const getDataWishlist = () => {
  return {
    type: "GET_DATA_wishlist",
    payload: axios.get(`wishlist?name=&sort=&limit=5&page=1&searchDate=`),
  };
};

export const getDataWishlistById = (wishlistId) => {
  return {
    type: "GET_DATA_WISHLIST",
    payload: axios.get(`wishlist/${wishlistId}`),
  };
};

export const createDataWishlist = (data) => {
  return {
    type: "CREATE_DATA_WISHLIST",
    payload: axios.post("wishlist", data),
  };
};

export const deleteDatawishlist = (wishlistId) => {
  return {
    type: "DELETE_DATA_WISHLIST",
    payload: axios.delete(`wishlist/${wishlistId}`),
  };
};
