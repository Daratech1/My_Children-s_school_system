var Promise = require("promise");
import instance from "uitils/api";

import { REPORTS_METHOD_PERMISION } from "./types";
// المشاركه
export const getReportsShareMethode = (data) => (dispatch) => {
    const promise = new Promise((resolve, reject) => {
      instance.post(`/api/user/student/reports/permissions` , data).then(
        (res) => {
          dispatch({ type: REPORTS_METHOD_PERMISION, payload:res.data });
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  
    return promise;
  };