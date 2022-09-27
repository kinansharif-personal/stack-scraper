import { REDUX_TYPES } from "../constant/constant";
const { GET_USER } = REDUX_TYPES;

export const userAction = () => {
  return {
    type: GET_USER,
    payload: {
      name: "abc",
      image: "adfd",
      country: "italia",
    },
  };
};
