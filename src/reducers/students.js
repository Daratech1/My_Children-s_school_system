import { GET_STUDENTS,CALL_STUDENTS } from "../action/types";

const initialState = {
  students: [],
  loading: true,
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_STUDENTS:
      return {
        students: payload,
        loading: false,
      };
      case CALL_STUDENTS:
        return {
          ...state,
          loading: false,
        };
    default:
      return state;
  }
};
