import axios from "axios";

import { GET_STATS, DELETE_STAT, ADD_STAT } from "./types";

//GET STATS
export const getStats = () => dispatch => {
  axios
    .get("/api/stats/")
    .then(res => {
      dispatch({
        type: GET_STATS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
