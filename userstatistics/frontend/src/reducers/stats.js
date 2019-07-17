import { GET_USERS } from "../actions/types.js";

const initialState = {
  stats: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        stats: action.payload
      };

    default:
      return state;
  }
}
