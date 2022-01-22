import { GET_APPLICATIONS,CREATE_APPLICATIONS } from "../action/types";

const initialState = {
  applications: [],
  loading: true,
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_APPLICATIONS:
      return {
        applications: payload,
        loading: false,
      };
      case CREATE_APPLICATIONS:
      return {
        applications:[payload,...state.applications],
        loading: false,
      };
    default:
      return state;
  }
};
