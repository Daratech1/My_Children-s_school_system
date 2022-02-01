
var Promise = require("promise");
import instance from "uitils/api";

import { REPORTS_METHOD_ATTANDANCE } from "./types";
//   الغياب 
export const getReportsAttandanceMethode = (data) => (dispatch) => {
    const promise = new Promise((resolve, reject) => {
      instance.post(`/api/user/student/reports/attandance` , data).then(
        (res) => {
          dispatch({ type: REPORTS_METHOD_ATTANDANCE, payload:res.data });
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  
    return promise;
  };