var Promise = require("promise");
import instance from "uitils/api";

import { PAYMENT_METHODE } from "./types";
export const getPaymentMethode = (id) => (dispatch) => {
      const thePath = window.location.pathname;
  const lastItem = thePath.substring(thePath.lastIndexOf("/") + 1);
  const promise = new Promise((resolve, reject) => {
    instance.get(`/api/user/student/${id}/transactions`).then(
      (res) => {
        dispatch({ type: PAYMENT_METHODE, payload: res.data  });
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  });

  return promise;
};