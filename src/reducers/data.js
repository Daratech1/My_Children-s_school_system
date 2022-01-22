import { GET_STATIC_DATA } from "../action/types";

const initialState = {
  staticData: {},
  loading: true,
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_STATIC_DATA:
      return {
        staticData: payload,
        loading: false,
      };
    default:
      return state;
  }
};
