import axios from "axios";
import { GET_USERS } from "./types";

//GET Users
export const getUsers = () => dispatch => {
  axios
    .get("/api/users/")
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    })
    .catch(err => alert("there was a problem getting the list of users"));
};
