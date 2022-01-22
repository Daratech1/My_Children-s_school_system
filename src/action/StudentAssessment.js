var Promise = require("promise");
import instance from "uitils/api";

import { STUDENT_ASSESSMENT } from "./types";
export const getstAssessment = (dayDate) => (dispatch) => {
  const thePath = window.location.pathname;
  const lastItem = thePath.substring(thePath.lastIndexOf("/") + 1);

  const promise = new Promise((resolve, reject) => {
    instance.get(`/api/user/student/${lastItem}/participation${ dayDate !== "" ? `?date=${dayDate}` : ""}`).then(
      (res) => {
        dispatch({ type: STUDENT_ASSESSMENT, payload: res.data  });
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  });

  return promise;
};
