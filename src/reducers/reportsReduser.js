import { REPORTS_METHOD_PERMISION } from "../action/types";

const initialState = {
    reportsData_PER:{},
    loading: true,
};
export default (state = initialState, action) => {
  const { type, payload ,date } = action;
  switch (type) {

      case REPORTS_METHOD_PERMISION:
      return {
        reportsData_PER: payload,
        loading: false,
      };

    default:
      return state;
    }
};