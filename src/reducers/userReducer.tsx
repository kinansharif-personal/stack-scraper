import { REDUX_TYPES } from "../constant/constant";
const { GET_USER, GET_USER_ASYNC } = REDUX_TYPES;

type Action = {
  type: string;
  payload: {};
};

export const userReducer = (state = { user: {} }, action: Action) => {
  switch (action.type) {
    case GET_USER_ASYNC: {
      return { ...state, user: action.payload.user };
    }
    default:
      return state;
  }
};
