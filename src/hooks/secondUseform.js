import { useState } from "react";
import { omit } from "lodash";

const secondUseForm = (num) => {
  //Form values
  const [values2, setValues] = useState({});
  //Errors
  const [errors2, setErrors] = useState({});
  const [disableBtn2, setDisableBtn] = useState(true);

  const validate = (name, value) => {
    //A function to validate each input values

    switch (name) {
 
      case "type_id":
        if (value === "") {
          // we will set the error state

          setErrors({
            ...errors2,
            type_id: "يجب تحديد المسار التعليمى ",
          });
        } else {
          // set the error state empty or remove the error for student_name input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors2, "type_id");
          setErrors(newObj);
        }
        break;
      case "gender_id":
        if (value === "") {
          // we will set the error state

          setErrors({
            ...errors2,
            gender_id: "يجب تحديد النوع  ",
          });
        } else {
          // set the error state empty or remove the error for student_name input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors2, "gender_id");
          setErrors(newObj);
        }
        break;
      case "grade_id":
        if (value === "") {
          // we will set the error state

          setErrors({
            ...errors2,
            grade_id: "يجب تحديد المرحلة  ",
          });
        } else {
          // set the error state empty or remove the error for student_name input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors2, "grade_id");
          setErrors(newObj);
        }
        break;
      case "level_id":
        if (value === "") {
          // we will set the error state

          setErrors({
            ...errors2,
            level_id: "يجب تحديد المستوى  ",
          });
        } else {
          // set the error state empty or remove the error for student_name input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors2, "level_id");
          setErrors(newObj);
        }
        break;
        case "plan_id":
            if (value === "") {
              // we will set the error state
    
              setErrors({
                ...errors2,
                plan_id: "يجب تحديد نظام السداد  ",
              });
            } else {
              // set the error state empty or remove the error for student_name input
    
              //omit function removes/omits the value from given object and returns a new object
              let newObj = omit(errors2, "plan_id");
              setErrors(newObj);
            }
            break;
            case "transportation_id":
                if (value === "") {
                  // we will set the error state
        
                  setErrors({
                    ...errors2,
                    transportation_id: "يجب تحديد خدمة النقل  ",
                  });
                } else {
                  // set the error state empty or remove the error for student_name input
        
                  //omit function removes/omits the value from given object and returns a new object
                  let newObj = omit(errors2, "transportation_id");
                  setErrors(newObj);
                }
                break;
                case "transportation_payment":
                    if (value === "") {
                      // we will set the error state
            
                      setErrors({
                        ...errors2,
                        transportation_payment: "يجب إختيار مدة الإشتراك  ",
                      });
                    } else {
                      // set the error state empty or remove the error for student_name input
            
                      //omit function removes/omits the value from given object and returns a new object
                      let newObj = omit(errors2, "transportation_payment");
                      setErrors(newObj);
                    }
                    break;
     
      default:
        break;
    }
  };

  //A method to handle form inputs
  const handleChange2 = (event) => {
    //To stop default events
    // event.persist();
    let name = event.target.name;
    let val = event.target.value;

    validate(name, val);
    //Let's set these values in state
   

    // }
    setValues({
      ...values2,
      [name]: val,
    });

    if (Object.keys(values2).length >= num) {
      setDisableBtn(false);

    }else{
      setDisableBtn(true)
    }
  };
 
  const handleSubmit2 = (event) => {
    if (event) event.preventDefault();
  
    if (Object.keys(errors2).length === 0 && Object.keys(values2).length !== 0) {
      // callback();
    } else {
      setDisableBtn(true);
    }
  };

  return {
    values2,
    errors2,
    handleChange2,
    handleSubmit2,
    disableBtn2,
  };
};

export default secondUseForm;
