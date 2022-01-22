var Promise = require("promise");
import instance from "uitils/api";
import {
    UPDATE_PROFILE
} from "./types";
import {setAlert} from './alert'


export const updateProfile = (body) => (dispatch) => {
    const promise = new Promise((resolve, reject) => {
     
      instance.post("/api/user/auth/update",body).then(
        (res) => {
           dispatch({ type:UPDATE_PROFILE, payload: res.data});
           dispatch(setAlert('تم تعديل الملف الشخصى','success'))
          resolve(res);
        },
        (err) => {
          reject(err);
  
        }
      );
    });
  
    return promise;
  };