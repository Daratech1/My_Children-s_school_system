var Promise = require("promise");
import instance from "uitils/api";
import {
GET_APPLICATIONS,
CREATE_APPLICATIONS
} from "./types";
import {setAlert} from './alert'

export const getApplication = () => (dispatch) => {
    const promise = new Promise((resolve, reject) => {
     
      instance.get("/api/user/application/all").then(
        (res) => {
           dispatch({ type:GET_APPLICATIONS, payload: res.data.data});
          resolve(res);
        },
        (err) => {
          reject(err);
  
        }
      );
    });
  
    return promise;
};
export const createApplication = (body) => (dispatch) => {
  const promise = new Promise((resolve, reject) => {
   
    instance.post("/api/user/applications/new_application",body).then(
      (res) => {
         dispatch({ type:CREATE_APPLICATIONS, payload: body});
         window.location.href = "/admin/student"
        resolve(res);
      },
      (err) => {
        const errors = err.response.data.errors
       // dispatch(setAlert(Object.values(errors),'error'))
        reject(err);

      }
    );
  });

  return promise;
};