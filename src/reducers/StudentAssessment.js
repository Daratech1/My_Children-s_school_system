import { STUDENT_ASSESSMENT } from "../action/types";

const initialState = {
    assessmentData: [],
  loading: true,
};
export default (state = initialState, action) => {
  const { type, payload ,date } = action;
  switch (type) {
    case STUDENT_ASSESSMENT:
      return {
        assessmentData: payload,
        loading: false,
      };
    default:
      return state;
    }
};