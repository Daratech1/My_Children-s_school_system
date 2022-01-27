var Promise = require("promise");
import instance from "uitils/api";

import { COUPON_METHOD } from "./types";

export const getCouponMethode = (studentId , tansctionId , data) => (dispatch) => {
    const promise = new Promise((resolve, reject) => {
      instance.post(`/api/user/student/${studentId}/transaction/${tansctionId}/applycoupon` , data).then(
        (res) => {
          dispatch({ type: COUPON_METHOD, payload:res.data });
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  
    return promise;
};