import { GET_DATA, POST_DATA, ADD_ITEM, DELETE_ITEM } from "./type";
import api from "./api";

export const getData = () => async (dispatch) => {
  api("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      dispatch({
        type: GET_DATA,
        payload: {
          response: true,
          data: response.data,
        },
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: GET_DATA,
        payload: {
          response: false,
          data: "",
        },
      });
    });
};

export const postData = () => async (dispatch) => {
  api("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      dispatch({
        type: POST_DATA,
        status: 1,
      });
    })
    .catch((error) => {
      dispatch({
        type: POST_DATA,
        status: -1,
      });
    });
};

export const addItem = () => async (dispatch) => {
  dispatch({ type: ADD_ITEM });
};
export const deleteItem = () => async (dispatch) => {
  dispatch({ type: DELETE_ITEM });
};
