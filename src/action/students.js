var Promise = require("promise");
import instance from "uitils/api";
import {
GET_STUDENTS,
CALL_STUDENTS
} from "./types";

export const getStudents = () => (dispatch) => {
    const promise = new Promise((resolve, reject) => {
     
      instance.get("/api/user/student/all").then(
        (res) => {
           dispatch({ type:GET_STUDENTS, payload: res.data.data});
          resolve(res);
        },
        (err) => {
          reject(err);
  
        }
      );
    });
  
    return promise;
};

export const callStudent = (student_id) => (dispatch) => {
  const promise = new Promise((resolve, reject) => {
   
    instance.post(`/api/user/student/${student_id}/student_call`).then(
      (res) => {
         dispatch({ type:CALL_STUDENTS, payload: res.data.data});
        resolve(res);
      },
      (err) => {
        reject(err);

      }
    );
  });

  return promise;
};
