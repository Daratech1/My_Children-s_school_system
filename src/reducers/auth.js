import {
  USER_LOADED,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  AUTH_ERROR
} from "../action/types";

// const initialState = {
//     token: localStorage.getItem('token'),
//     isAuthenticated: null,
//     loading: true,
//     user: null
// }

// export default (state = initialState, action) => {
//     const { type, payload } = action
//     switch (type) {
//         case USER_LOADED:
//             return {
//                 ...state,
//                 isAuthenticated: true,
//                 loading: false,
//                 user: payload.userData
//             }
//         case REGISTER_SUCCESS:
//         case LOGIN_SUCCESS:
//             localStorage.setItem('token', payload.access_token)
//             return {
//                 ...state,
//                 payload,
//                 user: payload.userData,
//                 isAuthenticated: true,
//                 loading: false
//             }
//         case REGISTER_FAIL:
//         case LOGIN_FAIL:
//         case LOGOUT_SUCCESS:
//         case AUTH_ERROR:
//             localStorage.removeItem('token')
//             return {
//                 ...state,
//                 token: null,
//                 isAuthenticated: false,
//                 loading: false,

//             }

//         default:
//             return state
//     }
// }

const initialState = {
  isAuthenticated: false,
  loading: true,
  user: {},
  message: "",
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload.userData
      }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.userData,
      };

    case LOGOUT_SUCCESS:
    case AUTH_ERROR:
    localStorage.removeItem('token')

      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
      };

    case "SET_ADMIN":
      return {
        ...state,
        message: action.value,
      };
    default:
      return state;
  }
};
