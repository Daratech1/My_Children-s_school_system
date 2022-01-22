import { GET_PERMISSIONS,CREATE_PERMISSIONS,GET_PERMISSION_ABSENCE } from "../action/types";

const initialState = {
  permissions: [],
  absence:{},
  loading: true,
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PERMISSIONS:
      return {
        ...state,
        permissions: payload,
        loading: false,
      };
      case GET_PERMISSION_ABSENCE:
      return {
        ...state,
        absence: payload,
        loading: false,
      };
      case CREATE_PERMISSIONS:
      return {
        ...state,
        permissions:[payload,...state.permissions],
        loading: false,
      };
    default:
      return state;
    }
};
