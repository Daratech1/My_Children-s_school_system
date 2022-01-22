var Promise = require("promise");
import instance from "uitils/api";
import {
GET_PERMISSIONS,CREATE_PERMISSIONS,GET_PERMISSION_ABSENCE} from "./types";
import {setAlert} from './alert'

export const getPermissions = () => (dispatch) => {
    const promise = new Promise((resolve, reject) => {
     
      instance.get("/api/user/student/view_permissions").then(
        (res) => {
           dispatch({ type:GET_PERMISSIONS, payload: res.data.data});
          resolve(res);
        },
        (err) => {
          reject(err);
  
        }
      );
    });
  
    return promise;
};

export const getPermissionAndAbsence= () => (dispatch) => {
  const promise = new Promise((resolve, reject) => {
   
    instance.get("/api/user/student/2/attandance_report").then(
      (res) => {
         dispatch({ type:GET_PERMISSION_ABSENCE, payload: res.data.data});
        resolve(res);
      },
      (err) => {
        reject(err);

      }
    );
  });

  return promise;
};


export const createPermissions = (student_id,body) => (dispatch) => {
  const promise = new Promise((resolve, reject) => {
   
    instance.post(`/api/user/student/${student_id}/request_permission`,body).then(
      (res) => {
         dispatch({ type:CREATE_PERMISSIONS, payload: res.data.data});
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