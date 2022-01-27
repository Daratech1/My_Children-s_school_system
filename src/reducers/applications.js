import { GET_APPLICATIONS,GET_PLANS,SEND_PLAN ,CREATE_APPLICATIONS } from "../action/types";

const initialState = {
  applications: [],
  plans:[],
  msg:{},
  loading: true,
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_APPLICATIONS:
      return {
        ...state,
        applications: payload,
        loading: false,
      };
    case GET_PLANS:
      return {
        ...state,
        plans: payload,
        loading: false,
      };
    case CREATE_APPLICATIONS:
      return {
        applications:[payload,...state.applications],
        loading: false,
      };
    case SEND_PLAN:
      return {
        ...state,
        msg: payload,
        loading: false,
      };
    default:
      return state;
  }
};
