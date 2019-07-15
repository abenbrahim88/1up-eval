import { GET_STATS, DELETE_STAT, ADD_STAT } from "../actions/types.js";

const initialState = {
  stats: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STATS:
      return {
        ...state,
        stats: action.payload
      };
      console.log(state);
    default:
      return state;
  }
}
