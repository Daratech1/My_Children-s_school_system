import React, { useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";


const styles = () => ({
  radioContainer: {
    direction: "rtl",
    width: "100%",
    fontFamily: "cairo",
    marginTop: "10px !important",
  },
  labelText: {
    fontFamily: "cairo",
  },
  formBox: {
    direction: "rtl",
  },
});
const useStyles = makeStyles(styles);

const OrderForm=({ errors,handleChange,data:{nationalities} })=> {
  const classes = useStyles();
  const [types, setTypes] = useState([]);
  const [genders, setGenders] = useState([]);
  const [grades, setGrades] = useState([]);
  const [levels, setLevels] = useState([]);
  const [usedSlotsArry, setUsedSlotsArry] = useState([]);

  useEffect(() => {
    getTypes();
  }, []);

  const getTypes = () => {
    axios
      .get(
        "http://admin.getech-eg.com/public/api/user/applications/application_data?to_return=type_id"
      )
      .then(function (response) {
        setTypes(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  const getGender = (id) => {
    axios
      .get(
        `http://admin.getech-eg.com/public/api/user/applications/application_data?to_return=gender_id&type_id=${id}`
      )
      .then(function (response) {
        setGenders(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  const getGrade = (id) => {
    axios
      .get(
        `http://admin.getech-eg.com/public/api/user/applications/application_data?to_return=grade_id&gender_id=${id}`
      )
      .then(function (response) {
        setGrades(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  const getLevel = (id) => {
    axios
      .get(
        `http://admin.getech-eg.com/public/api/user/applications/application_data?to_return=level_id&grade_id=${id}`
      )
      .then(function (response) {
        setLevels(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
 
  const handleSlots = (time) => {
    axios
      .get(
        `http://admin.getech-eg.com/public/api/user/meeting/used_slots?selected_date=${time}`
      )
      .then(function (response) {
        setUsedSlotsArry(response.data.slots);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  const getOpenTime = (event) => {
    handleChange(event);
    handleSlots(event.target.value);
  };
  const handleSelectType = (event) => {
    handleChange(event);
    getGender(event.target.value);
  };
  const handleSelectGender = (event) => {
    handleChange(event);
    getGrade(event.target.value);
  };
  const handleSelectGrades = (event) => {
    handleChange(event);
    getLevel(event.target.value);
  };
  const handleSelectNationality = ()=>{
    return(
     nationalities && Object.keys(nationalities).map((keyName, i) => (
            <option  key={i} value={keyName}>{nationalities[keyName]}</option>
    )))
  }


  return (
    <div className={classes.formBox}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Typography component="h1" variant="h4" align="center">
            تقديم طلب
          </Typography>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={6} sm={6}>
            <div className="form-group">
              <label> اسم الطالب فقط</label>
              <input
                type="text"
                name="student_name"
                onChange={(e)=>handleChange(e)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="اسم الطالب فقط"
              />
              {errors.student_name && (
                <small className="error-input">{errors.student_name}</small>
              )}
            </div>
          </Grid>
          <Grid item xs={6} sm={6}>
            <div className="form-group">
              <label>هوية الطالب </label>
              <input
                name="national_id"
                onChange={(e)=>handleChange(e)}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="هوية الطالب "
              />
              {errors.national_id && (
                <small className="error-input">{errors.national_id}</small>
              )}
            </div>
          </Grid>

          <Grid item xs={6} sm={4}>
            <div className="form-group">
              <label>مكان الميلاد </label>
              <input
                type="text"
                name="birth_place"
                onChange={(e)=>handleChange(e)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="مكان الميلاد"
              />
              {errors.birth_place && (
                <small className="error-input">{errors.birth_place}</small>
              )}
            </div>
          </Grid>
          <Grid item xs={6} sm={4}>
            <div className="form-group">
              <label>تاريخ الميلاد </label>
              <input
                type="date"
                name="birth_date"
                onChange={(e)=>handleChange(e)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="تاريخ الميلاد"
              />
              {errors.birth_date && (
                <small className="error-input">{errors.birth_date}</small>
              )}
            </div>
          </Grid>
          <Grid item xs={6} sm={4}>
            <div className="form-group">
              <label>الجنسية </label>
              <select name="nationality_id" onChange={(e)=>handleChange(e)}>
                <option value="">إختر الجنسية</option>
                {handleSelectNationality()}
              </select>
              {errors.nationality_id && (
                <small className="error-input">{errors.nationality_id}</small>
              )}
            </div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <hr />
          </Grid>
          <Grid item xs={4} sm={4}>
            <div className="form-group">
              <label>تحديد يوم المقابلة </label>
              <input
                type="date"
                name="selected_date"
                onChange={(e) => getOpenTime(e)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="تحديد يوم المقابلة"
              />
              {errors.selected_date && (
                <small className="error-input">{errors.selected_date}</small>
              )}
            </div>
          </Grid>
          <Grid item xs={4} sm={4}>
            <div className="form-group">
              <label>تحديد التوقيت بالساعة </label>
              <select name="selected_time" onChange={(e)=>handleChange(e)}>
                <option value="">إختر التوقيت</option>
                {usedSlotsArry.length > 0 ? (
                  usedSlotsArry &&
                  usedSlotsArry.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.time}
                    </option>
                  ))
                ) : (
                  <option value=""> لا يوجد مواعيد متاحة</option>
                )}
              </select>
              {errors.selected_time && (
                <small className="error-input">{errors.selected_time}</small>
              )}
            </div>
          </Grid>
          <Grid item xs={4} sm={4}>
            <FormControl
              component="fieldset"
              className={classes.radioContainer}
            >
              <FormLabel className={classes.labelText} component="legend">
                تحديد مكان المقابلة{" "}
              </FormLabel>
              <RadioGroup row aria-label="online" name="online">
                <FormControlLabel
                  value="1"
                  control={<Radio color="info" />}
                  label="اون لاين"
                  onChange={(e)=>handleChange(e)}
                />
                <FormControlLabel
                  value="0"
                  control={<Radio color="info" />}
                  label="بالمدرسة"
                  onChange={(e)=>handleChange(e)}
                />
              </RadioGroup>
              {errors.online && (
                <small className="error-input">{errors.online}</small>
              )}
            </FormControl>
          </Grid>
          {types.length > 0 && (
            <>
              <Grid item xs={12} sm={12}>
                <hr />
              </Grid>
              <Grid item xs={6} sm={3}>
                <div className="form-group">
                  <label>مسار التعليم </label>
                  <select name="type_id" onChange={(e) => handleSelectType(e)}>
                    <option value="">إخترالمسار</option>
                    {types.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.type_name}
                      </option>
                    ))}
                  </select>
                  {errors.type_id && (
                    <small className="error-input">{errors.type_id}</small>
                  )}
                </div>
              </Grid>
            </>
          )}

          {genders.length > 0 && (
            <Grid item xs={6} sm={3}>
              <div className="form-group">
                <label>النوع </label>
                <select
                  name="gender_id"
                  onChange={(e) => handleSelectGender(e)}
                >
                  <option value="">إختر النوع</option>

                  {genders.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.gender_name}
                    </option>
                  ))}
                </select>
                {errors.gender_id && (
                  <small className="error-input">{errors.gender_id}</small>
                )}
              </div>
            </Grid>
          )}
          {grades.length > 0 && (
            <Grid item xs={6} sm={3}>
              <div className="form-group">
                <label>القسم </label>
                <select name="grade_id" onChange={(e) => handleSelectGrades(e)}>
                  <option value="">إختر القسم</option>

                  {grades.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.grade_name}
                    </option>
                  ))}
                </select>
                {errors.grade_id && (
                  <small className="error-input">{errors.grade_id}</small>
                )}
              </div>
            </Grid>
          )}
          {levels.length > 0 && (
            <Grid item xs={6} sm={3}>
              <div className="form-group">
                <label>المرحلة </label>
                <select name="level_id" onChange={(e)=>handleChange(e)}>
                  <option value="">إختر المرحلة</option>

                  {levels.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.level_name}
                    </option>
                  ))}
                </select>
                {errors.level_id && (
                  <small className="error-input">{errors.level_id}</small>
                )}
              </div>
            </Grid>
          )}

          <Grid item xs={12} sm={12}>
            <hr />
          </Grid>
          <Grid item xs={6} sm={6}>
            <FormControl
              component="fieldset"
              className={classes.radioContainer}
            >
              <FormLabel className={classes.labelText} component="legend">
                هل يحتاج الطالب الى رعاية
              </FormLabel>
              <RadioGroup row aria-label="gender" name="student_care">
                <FormControlLabel
                  
                  value="1"
                  control={<Radio color="info" />}
                  label="نعم"
                  onChange={(e)=>handleChange(e)}
                />
                <FormControlLabel
                  value="0"
                  control={<Radio color="info" />}
                  label="لا"
                  onChange={(e)=>handleChange(e)}
                />
              </RadioGroup>
              
            </FormControl>
          </Grid>

          <Grid item xs={6} sm={6}>
            <div className="form-group">
              <label> نظام السداد </label>
           
              <select name="plan_id" onChange={(e)=>handleChange(e)}>
              <option value="">إختر نظام السداد  </option>
                <option value="1">سنة دراسية كاملة</option>
                <option value="2"> سداد جزئى</option>
                <option value="3"> تقسيط</option>
              </select>
              {errors.plan_id && (
                <small className="error-input">{errors.plan_id}</small>
              )}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
OrderForm.propTypes = {
  getData: PropTypes.func,
  handleChange: PropTypes.func,
  data: PropTypes.object,
  errors: PropTypes.object
};

const mapStateToProps = (state) => ({
  data: state.data.staticData,
});

export default connect(mapStateToProps, {})(
  OrderForm
);
