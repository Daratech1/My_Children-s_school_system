var Promise = require("promise");
import instance from "uitils/api";
import {
SEND_CODE,VERIFY_CODE} from "./types";
import {setAlert} from './alert'

export const sendCode = () => (dispatch) => {
    const promise = new Promise((resolve, reject) => {
     
      instance.get("/api/user/mobile/send_code").then(
        (res) => {
           dispatch({ type:SEND_CODE, payload: res.data.code});
          resolve(res);
        },
        (err) => {
          reject(err);
  
        }
      );
    });
  
    return promise;
};

export const verifyCode= () => (dispatch) => {
  const promise = new Promise((resolve, reject) => {
   
    instance.get("/api/user/mobile/verify").then(
      (res) => {
         dispatch({ type:VERIFY_CODE, payload: res.data.data});
        resolve(res);
      },
      (err) => {
        reject(err);

      }
    );
  });

  return promise;
};

