var Promise = require("promise");
import instance from "uitils/api";
import {
    GET_STATIC_DATA
} from "./types";

export const getStaticData = () => (dispatch) => {
    const promise = new Promise((resolve, reject) => {
     
      instance.get("/api/user/data").then(
        (res) => {
           dispatch({ type:GET_STATIC_DATA, payload: res.data});
          resolve(res);
        },
        (err) => {
          reject(err);
  
        }
      );
    });
  
    return promise;
  };