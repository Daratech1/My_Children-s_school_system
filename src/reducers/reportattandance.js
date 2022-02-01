import { REPORTS_METHOD_ATTANDANCE } from "../action/types";

const initialState = {
    reportsData_ATTA:{},
    loading: true,
};
export default (state = initialState, action) => {
  const { type, payload ,date } = action;
  switch (type) {
     case REPORTS_METHOD_ATTANDANCE:
      return {
        reportsData_ATTA: payload,
        loading: false,
      };
    default:
      return state;
    }
}; 