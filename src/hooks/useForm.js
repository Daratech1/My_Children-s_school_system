import { useState } from "react";
import { omit } from "lodash";

const useForm = (num) => {
  //Form values
  const [values, setValues] = useState({});
  //Errors
  const [errors, setErrors] = useState({});
  const [disableBtn, setDisableBtn] = useState(true);

  const validate = (name, value) => {
    //A function to validate each input values

    switch (name) {
      case "student_name":
        if (value === "") {
          // we will set the error state

          setErrors({
            ...errors,
            student_name: "يجب إدخال إسم الطالب",
          });
        } else {
          // set the error state empty or remove the error for student_name input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "student_name");
          setErrors(newObj);
        }
        break;
        case "student_id":
        if (value === "") {
          // we will set the error state

          setErrors({
            ...errors,
            student_id: "يجب إختيار إسم الطالب",
          });
        } else {
          // set the error state empty or remove the error for student_id input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "student_id");
          setErrors(newObj);
        }
        break; 
      case "national_id":
        if (value === "") {
          // we will set the error state

          setErrors({
            ...errors,
            national_id: "يجب إدخال هوية الطالب",
          });
        }
        else if(value.length > 10){
          setErrors({
            ...errors,
            national_id: "يجب أن يكون رقم الهوية مكون من عشرة أرقام  ",
          });
        }
        else if(  value.length < 10){
          setErrors({
            ...errors,
            national_id: "يجب أن يكون رقم الهوية مكون من عشرة أرقام  ",
          });
        }
         else {
          // set the error state empty or remove the error for student_name input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "national_id");
          setErrors(newObj);
        }
        break;
      case "birth_place":
        if (value === "") {
          // we will set the error state

          setErrors({
            ...errors,
            birth_place: "يجب إدخال محل الميلاد ",
          });
        } else {
          // set the error state empty or remove the error for student_name input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "birth_place");
          setErrors(newObj);
        }
        break;
      case "birth_date":
        if (value === "") {
          // we will set the error state

          setErrors({
            ...errors,
            birth_date: "يجب إدخال تاريخ الميلاد ",
          });
        } else {
          // set the error state empty or remove the error for student_name input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "birth_date");
          setErrors(newObj);
        }
        break;
      case "nationality_id":
        if (value === "") {
          // we will set the error state

          setErrors({
            ...errors,
            nationality_id: "يجب إدخال الجنسية  ",
          });
        } else {
          // set the error state empty or remove the error for student_name input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "nationality_id");
          setErrors(newObj);
        }
        break;
      case "selected_date":
        if (value === "") {
          // we will set the error state

          setErrors({
            ...errors,
            selected_date: "يجب تحديد موعد المقابلة  ",
          });
        } else {
          // set the error state empty or remove the error for student_name input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "selected_date");
          setErrors(newObj);
        }
        break;
      case "selected_time":
        if (value === "") {
          // we will set the error state

          setErrors({
            ...errors,
            selected_time: "يجب تحديد معاد المقابلة ",
          });
        } else {
          // set the error state empty or remove the error for student_name input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "selected_time");
          setErrors(newObj);
        }
        break;
      case "online":
        if (value === "") {
          // we will set the error state

          setErrors({
            ...errors,
            online: "يجب تحديد مكان المقابلة ",
          });
        } else {
          // set the error state empty or remove the error for student_name input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "online");
          setErrors(newObj);
        }
        break;
      case "type_id":
        if (value === "") {
          // we will set the error state

          setErrors({
            ...errors,
            type_id: "يجب تحديد المسار التعليمى ",
          });
        } else {
          // set the error state empty or remove the error for student_name input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "type_id");
          setErrors(newObj);
        }
        break;
      case "gender_id":
        if (value === "") {
          // we will set the error state

          setErrors({
            ...errors,
            gender_id: "يجب تحديد النوع  ",
          });
        } else {
          // set the error state empty or remove the error for student_name input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "gender_id");
          setErrors(newObj);
        }
        break;
      case "grade_id":
        if (value === "") {
          // we will set the error state

          setErrors({
            ...errors,
            grade_id: "يجب تحديد المرحلة  ",
          });
        } else {
          // set the error state empty or remove the error for student_name input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "grade_id");
          setErrors(newObj);
        }
        break;
      case "level_id":
        if (value === "") {
          // we will set the error state

          setErrors({
            ...errors,
            level_id: "يجب تحديد المستوى  ",
          });
        } else {
          // set the error state empty or remove the error for student_name input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "level_id");
          setErrors(newObj);
        }
        break;
      case "plan_id":
        if (value === "") {
          // we will set the error state

          setErrors({
            ...errors,
            plan_id: "يجب تحديد نظام السداد  ",
          });
        } else {
          // set the error state empty or remove the error for student_name input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "plan_id");
          setErrors(newObj);
        }
        break;
        case "pickup_time":
          if (value === "") {
            // we will set the error state
  
            setErrors({
              ...errors,
              pickup_time: "يجب تحديد  تاريخ الإستئذان  ",
            });
          } else {
            // set the error state empty or remove the error for student_name input
  
            //omit function removes/omits the value from given object and returns a new object
            let newObj = omit(errors, "pickup_time");
            setErrors(newObj);
          }
          break;
          case "pickup_persion":
            if (value === "") {
              // we will set the error state
    
              setErrors({
                ...errors,
                pickup_persion: "يجب إدخال إسم المرافق للطالب  ",
              });
            } else {
              // set the error state empty or remove the error for student_name input
    
              //omit function removes/omits the value from given object and returns a new object
              let newObj = omit(errors, "pickup_persion");
              setErrors(newObj);
            }
            break;
            case "permission_reson":
              if (value === "") {
                // we will set the error state
      
                setErrors({
                  ...errors,
                  permission_reson: "يجب إدخال سبب الإستئذان    ",
                });
              } else {
                // set the error state empty or remove the error for student_name input
      
                //omit function removes/omits the value from given object and returns a new object
                let newObj = omit(errors, "permission_reson");
                setErrors(newObj);
              }
              break;
              case "permission_duration":
                if (value === "") {
                  // we will set the error state
        
                  setErrors({
                    ...errors,
                    permission_duration: "يجب إدخال مدة الإستئذان    ",
                  });
                } else {
                  // set the error state empty or remove the error for student_name input
        
                  //omit function removes/omits the value from given object and returns a new object
                  let newObj = omit(errors, "permission_duration");
                  setErrors(newObj);
                }
                break;
      default:
        break;
    }
  };

  //A method to handle form inputs
  const handleChange = (event) => {
    //To stop default events
    // event.persist();
    let name = event.target.name;
    let val = event.target.value;

    validate(name, val);
    //Let's set these values in state
   

    // }
    setValues({
      ...values,
      [name]: val,
    });

    if (Object.keys(values).length >= num) {
      setDisableBtn(false);

    }else{
      setDisableBtn(true)
    }
  };
 
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
  
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      // callback();
    } else {
      setDisableBtn(true);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    disableBtn,
  };
};

export default useForm;
