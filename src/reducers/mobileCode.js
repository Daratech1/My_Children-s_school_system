import { SEND_CODE,VERIFY_CODE } from "../action/types";

const initialState = {
  code: 0,
  loading: true,
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEND_CODE:
      return {
        code: payload,
        loading: false,
      };
      case VERIFY_CODE:
      return {
        loading: false,
      };
      
    default:
      return state;
    }
};
