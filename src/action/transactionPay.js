var Promise = require("promise");
import instance from "uitils/api";

import { TRANSACTION_METHOD } from "./types";
export const getTransactoinMethode = (studentId , tansctionId , data) => (dispatch) => {

  const promise = new Promise((resolve, reject) => {
    instance.post(`/api/user/student/${studentId}/transaction/${tansctionId}` , data).then(
      (res) => {
        dispatch({ type: TRANSACTION_METHOD, payload:res.data });
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  });

  return promise;
};