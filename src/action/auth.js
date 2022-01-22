var Promise = require("promise");
import instance from "uitils/api";
import {setAlert} from './alert'
import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  CLEAR_PROFILE,
} from "./types";
// import setAuthToken from '../uitils/setAuthToken'
// const baseUrl ='http://admin.getech-eg.com/public'

// User loaded

// Register user
// export const register =({name,email,password})=>async dispatch=>{
// const config = {
//     headers:{
//         'Content-Type':'application/json',
//          'X-Custom-Header': 'XMLHttpRequest',
//          credentials: 'include'
//     }
// }
// const body =({name,email,password})
// try {
//     const res =await axios.post(`${baseUrl}/api/users`,body,config)
//     dispatch({
//         type:REGISTER_SUCCESS,
//         payload:res.data
//     })
//     dispatch(loadUser())

// } catch (err) {
//     const errors = err.response.data.errors
//     if (errors)
//     {
//         errors.forEach(error=> dispatch(setAlert(error.msg,'danger')))
//     }
//     dispatch({
//         type:REGISTER_FAIL
//     })
// }
// }

// Login user
// export const login =(body)=>async dispatch=>{
//     const config = {
//         headers:{
//             'Content-Type':'application/json'
//         }
//     }
//     try {
//         axios
//         .get(`${baseUrl}public/sanctum/csrf-cookie`)
//         .then(() => {})
//         .catch((error) => {
//           console.log(error);
//         });
//         const res =await axios.post(`${baseUrl}/api/user/auth/login`,body,config)
//         dispatch({
//             type:LOGIN_SUCCESS,
//             payload:res.data
//         })
//         dispatch(loadUser())
//     } catch (err) {
//          const errors = err.response.data.errors
//          dispatch(setAlert(errors.phone,'error'))
//         // if (errors) { }
//         dispatch({
//                 type:LOGIN_FAIL
//             })
//         // {
//         //    // errors.forEach(error=> dispatch(setAlert(error,'danger')))
//         // }
//         // const errors = err.response.errors
//         // if (errors)
//         // dispatch(setAlert(errors.phone,'error'))
//         // {
//         //    // errors.forEach(error=> dispatch(setAlert(error,'danger')))
//         // }
//         // dispatch({
//         //     type:LOGIN_FAIL
//         // })
//     }
// }
// Logout user & Clear profile

//  export const logout =()=> dispatch=>{
//      dispatch({
//          type:CLEAR_PROFILE
//      })
//      dispatch({
//          type:LOGOUT_SUCCESS
//      })
//  }

export const loadUser =() => async dispatch=>{
  // if(localStorage.token) {
  //     setAuthToken(localStorage.token)
  // }
  const promise = new Promise((resolve, reject) => {
    instance.get("/api/user/auth/user").then(
      (res) => {
        dispatch({
          type:USER_LOADED,
          payload: res.data
      })
       // dispatch(setAlert(res.data.message,'success'))

   resolve(res);
      },
      (err) => {
        dispatch({
          type:AUTH_ERROR,
         
      })
        reject(err);
      }
    );
  })
  return promise;
}


// Set token ketika telah login supaya bisa mendapatkan data dari server
export const storeToken = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
  instance.defaults.headers.common.authorization = `Bearer ${token}`;
};

export const login = ({ phone, password }) => (dispatch) => {
  const body = { phone, password };
  const promise = new Promise((resolve, reject) => {
    instance.get("/sanctum/csrf-cookie").then(
      (res) => {
        resolve(res);
      },
      (err) => {

        reject(err);
      }
    );
    instance.post("/api/user/auth/login", body).then(
      (res) => {
         dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        storeToken(res.data.access_token);
        resolve(res);
      },
      (err) => {
        const errors = err.response.data.errors
        dispatch({ type: LOGIN_FAIL});
        dispatch(setAlert(Object.values(errors),'error'))
        reject(err);

      }
    );
  });

  return promise;
};

export const logout = () => (dispatch) => {
  dispatch({
    type: CLEAR_PROFILE,
  });
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};

export const register = (data) => (dispatch) => {
  const promise = new Promise((resolve, reject) => {
    instance.post("/api/user/auth/register", data).then(
      (res) => {
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        resolve(res);
        window.location.href = "/login"
       // dispatch(setAlert(Object.values(errors),'success'))
      },
      (err) => {
        const errors = err.response.data.errors
        console.log(errors)
        dispatch(setAlert(Object.values(errors),'error'))
        reject(err);
      }
    );
  });

  return promise;
};

export const getProtectedAPI = () => (dispatch) => {
  const promise = new Promise((resolve, reject) => {
    instance.get("protected").then(
      (res) => {
        dispatch({ type: "SET_ADMIN", value: res.data.message });
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  });

  return promise;
};
